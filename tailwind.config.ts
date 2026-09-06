import type { Config } from "tailwindcss";

/**
 * Two kinds of colour here.
 *
 * The semantic set (`bg`, `fg`, `hair`, `accent`) resolves to CSS variables
 * that `.dust` in globals.css re-points. The dark pit ground is the default
 * — a light section is written as `<section className="dust">` and every
 * rule, muted caption and accent re-points with it.
 *
 * The literal set (`pit`, `dust`, `soil`, `ink`, `bone`, `ochre`, `steel`)
 * is for the few places that must name an exact colour regardless of
 * ground. All of it is sampled from the client's own photographs and logo —
 * see `brand.md`. `flag` is the logo's red, reserved for the mark itself.
 *
 * Because these are `var()` values, Tailwind's slash-opacity syntax does not
 * apply to them — use the `fg-soft` / `fg-mute` tokens instead of `fg/70`.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        "fg-soft": "var(--fg-soft)",
        "fg-mute": "var(--fg-mute)",
        hair: "var(--hair)",
        "hair-strong": "var(--hair-strong)",
        accent: "var(--accent)",

        pit: "#14110E",
        "pit-lift": "#1D1913",
        soil: "#6B4A30",
        dust: "#E8DFD2",
        "dust-lift": "#DED3C2",
        ink: "#1A1611",
        bone: "#EFE7DA",
        ochre: "#C08A3E",
        steel: "#275E7C",
        flag: "#D82E0B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        measure: "63ch",
        narrow: "52ch",
        statement: "20ch",
      },
    },
  },
  plugins: [],
};
export default config;
