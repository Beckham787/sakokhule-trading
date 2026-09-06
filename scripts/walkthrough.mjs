// Full walkthrough: scroll-position screenshots of the new homepage story
// sequence, full-page shots of every route, and the overlap/overflow audit
// used earlier in this project — run together so a claim of "checked" means
// the same thing every time.
import { chromium } from "playwright";
import fs from "fs";

const PORT = fs.readFileSync("/tmp/port.txt", "utf8").trim();
const BASE = `http://localhost:${PORT}`;
const OUT = "/mnt/user-data/outputs";
fs.mkdirSync(OUT, { recursive: true });

const ROUTES = ["/", "/company", "/company/services", "/company/projects", "/company/credentials", "/fleet", "/contact"];
const WIDTHS = [1440, 1024, 768, 390];

const browser = await chromium.launch();
let overlapCount = 0;
let overflowCount = 0;

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });

  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);

    const { overlaps, overflows } = await page.evaluate(() => {
      // Cross-fading layers (the story sequence) keep every step's content in
      // the DOM at once, all in the same absolute box, distinguished only by
      // opacity — so a purely geometric check has to walk up and skip
      // anything sitting inside an opacity:0 (or display:none / hidden)
      // ancestor, or every inactive step reads as "overlapping" the active
      // one when none of it is actually visible.
      const isHidden = (el) => {
        for (let n = el; n; n = n.parentElement) {
          const cs = getComputedStyle(n);
          if (cs.display === "none" || cs.visibility === "hidden" || Number(cs.opacity) === 0) return true;
        }
        return false;
      };

      const nodes = Array.from(document.querySelectorAll("body *")).filter((el) => {
        if (el.children.length > 0) return false;
        const t = (el.textContent || "").trim();
        return t.length > 0 && !isHidden(el);
      });
      const boxes = nodes
        .map((el) => ({ el, r: el.getBoundingClientRect(), cs: getComputedStyle(el) }))
        .filter((b) => b.r.width > 0 && b.r.height > 0 && b.cs.position !== "fixed" && b.cs.position !== "absolute");

      let overlaps = 0;
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i].r, b = boxes[j].r;
          if (boxes[i].el.contains(boxes[j].el) || boxes[j].el.contains(boxes[i].el)) continue;
          const ix = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
          const iy = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
          if (ix > 4 && iy > 4) overlaps++;
        }
      }

      const overflows = Array.from(document.querySelectorAll("body *")).filter(
        (el) => el.scrollWidth > document.documentElement.clientWidth + 2,
      ).length;

      return { overlaps, overflows };
    });

    overlapCount += overlaps;
    overflowCount += overflows;
    if (overlaps || overflows) {
      console.log(`  !! ${route} @${width} — overlaps=${overlaps} overflow=${overflows}`);
    }
  }
  await page.close();
}

console.log(`\naudit totals — overlaps=${overlapCount} overflow=${overflowCount}\n`);

// ---- scroll-through of the homepage story sequence, desktop + mobile ----
for (const [label, width, height] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const maxScroll = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
  const fractions = [0, 0.14, 0.32, 0.5, 0.62, 0.82, 0.97];
  const names = ["hero", "into-what-we-do", "what-we-do", "into-selected-work", "selected-work", "registration", "footer"];

  for (let i = 0; i < fractions.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round(maxScroll * fractions[i]));
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}/story-${label}-${i + 1}-${names[i]}.png` });
  }
  await page.close();
}

// full-page shot of every route at desktop width. The site's Reveal
// component hides below-the-fold content until it scrolls into view (an
// IntersectionObserver fires); a fullPage screenshot captures the whole
// layout without ever physically scrolling through it, so anything that
// never got its reveal reads as blank space. Scroll to the bottom in real
// steps first — same as a visitor would — so everything has already fired.
const fpPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const route of ROUTES) {
  await fpPage.goto(BASE + route, { waitUntil: "networkidle" });
  await fpPage.waitForTimeout(400);

  const total = await fpPage.evaluate(() => document.documentElement.scrollHeight);
  const step = 700;
  for (let y = 0; y < total; y += step) {
    await fpPage.evaluate((yy) => window.scrollTo(0, yy), y);
    await fpPage.waitForTimeout(150);
  }
  await fpPage.waitForTimeout(400);

  const name = route === "/" ? "home" : route.replace(/\//g, "-").replace(/^-/, "");
  await fpPage.screenshot({ path: `${OUT}/full-${name}.png`, fullPage: true });
}
await fpPage.close();

await browser.close();
console.log("done");
