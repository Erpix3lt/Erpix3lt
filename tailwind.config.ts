import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
      },
      boxShadow: {
        fuchsia:
          '0px 0px 20px #E7B7EF, inset 0px 0px 40px #E7B7EF',
        blue:
          '0px 0px 5px #919CFF, inset 0px 0px 15px #919CFF',
      },
      colors: {
        fuchsia: {
          300: "#E7B7EF",
        },
        blue: {
          300: "#919CFF",
        },
        green: {
          300: "#BEEF4A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
