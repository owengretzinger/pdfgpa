import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': 'rgb(var(--color-black) / <alpha-value>)',
        'darkgrey': 'rgb(var(--color-dark-grey) / <alpha-value>)',
        'lightgrey': 'rgb(var(--color-light-grey) / <alpha-value>)',
        'yellow': 'rgb(var(--color-yellow) / <alpha-value>)',
        'white': 'rgb(var(--color-white) / <alpha-value>)',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)']
      },
    },
  },
  darkMode: "class",
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}