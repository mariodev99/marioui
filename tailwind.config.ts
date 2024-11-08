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
        background: "#0A0A0A",
        title: {
          primary: "#e7e7e7",
          secundary: "#676767"
        },
        paragraph: "#666",
        nav: {
          primary: "#181818",
          secundary: "#0e0e0e",
          text: "#666",
        },
        card: {
          primary: "#242424",
          secundary: "#070707",
        },
        box: {
          background: "#151518",
          stroke: "#27272a",
          
        }
      },
    },
  },
  plugins: [],
};
export default config;
