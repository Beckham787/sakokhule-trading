/**
 * Builds a client-sendable PDF of brand-sheet.html.
 *
 * The sheet loads its typefaces from the Google Fonts CDN, which is fine in a
 * browser and useless in a headless print: the PDF gets written before the
 * webfonts arrive and the whole wordmark comes out as a serif. So this makes
 * a print build first, with the company's OWN self-hosted woff2 files inlined
 * as base64 @font-face rules, and prints that instead. No network, no race,
 * same letterforms every time.
 *
 *   node build-pdf.js
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const HERE = __dirname;
const SITE = path.join(HERE, "..");
const FONTS = path.join(SITE, "fonts");
const SRC = path.join(HERE, "brand-sheet.html");
const TMP = path.join(HERE, "_print-build.html");
const OUT = path.join(HERE, "Sakokhule-Trading-brand-sheet.pdf");

const CHROME = [
  "C:/Users/takal/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe",
  "C:/Users/takal/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe",
  "C:/Users/takal/AppData/Local/ms-playwright/chromium-1223/chrome-win64/chrome.exe",
].find((p) => fs.existsSync(p));
if (!CHROME) throw new Error("no chromium found");

function face(family, file, weight) {
  const b64 = fs.readFileSync(path.join(FONTS, file)).toString("base64");
  return `@font-face{font-family:"${family}";src:url(data:font/woff2;base64,${b64}) format("woff2");font-weight:${weight};font-display:block}`;
}

const embedded = [
  face("Archivo", "archivo-variable.woff2", "300 900"),
  face("IBM Plex Mono", "ibm-plex-mono-500.woff2", "400 600"),
  face("Fredoka", "fredoka-variable.woff2", "300 700"),
  face("Quicksand", "quicksand-variable.woff2", "300 700"),
].join("\n");

/* Print rules. The sheet is a long scrolling page; without these every panel
   splits across a page break at whatever point it happens to reach. */
const printCss = `
@page{ size:A4; margin:13mm }
html,body{ background:#E7DEC9 !important }
*{ -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important }
.wrap{ max-width:100% !important; padding:0 !important }
.panel,.card,.a4,.door,.vest,.board,.stage{ break-inside:avoid; page-break-inside:avoid }
.sec{ break-after:avoid; page-break-after:avoid; break-inside:avoid }
.intro{ padding-top:0 !important }
footer{ break-inside:avoid }
`;

let html = fs.readFileSync(SRC, "utf8");

// Strip the CDN font links — they're the whole reason the type falls back.
html = html
  .replace(/<link rel="preconnect"[^>]*>\s*/g, "")
  .replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]*>\s*/g, "");

// Inject the embedded faces and print rules ahead of the sheet's own styles,
// so the sheet's rules still win on everything except what printCss overrides.
html = html.replace("<style>", `<style>\n${embedded}\n${printCss}\n`);

fs.writeFileSync(TMP, html, "utf8");

execFileSync(
  CHROME,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=15000",
    `--print-to-pdf=${OUT}`,
    "file:///" + TMP.replace(/\\/g, "/"),
  ],
  { stdio: "pipe", timeout: 120000 },
);

fs.unlinkSync(TMP);
const kb = Math.round(fs.statSync(OUT).size / 1024);
console.log(`${OUT}  (${kb} KB)`);
