import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Dark-first, same ground as Izanolihle Roads (sister company, same
           yard, same fleet) — reasoning and contrast measurements in brand.md. */
        asphalt: "#131518",
        "asphalt-lift": "#1B1E22",
        bitumen: "#0C0E10",

        /* Sampled directly from the client's own approved company-profile PDF
           (the dominant chromatic pixel across the cover and section pages):
           #0F8FD4. 5.14:1 on asphalt — enough to carry any normal-weight text
           on the dark ground. blue-lift is for hover only. */
        blue: "#0F8FD4",
        "blue-lift": "#4FB4EF",

        bone: "#E8E6E1",
        concrete: "#DEDBD4",
        steel: "#9A968E",
        slate: "#55585C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        measure: "64ch",
        statement: "24ch",
      },
      transitionTimingFunction: {
        rise: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
