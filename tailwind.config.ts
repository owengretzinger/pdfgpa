import type { Config } from "tailwindcss";

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
  plugins: [],
};
export default config;
