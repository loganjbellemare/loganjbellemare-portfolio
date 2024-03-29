import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      midnightPurple: "#1e1324",
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      indigo: colors.indigo,
      purple: colors.purple,
      fuschia: colors.fuschia,
      pink: colors.pink,
      violet: colors.violet,
      lime: colors.lime,
      yellow: colors.yellow,
      sky: colors.sky,
      red: colors.red,
      orange: colors.orange,
      cyan: colors.cyan,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      backgroundImage: {
        "theme-image": "url('../img/Bg-image.PNG')",
      },
    },
  },
  plugins: [],
};
export default config;
