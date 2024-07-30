import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1320px",
      },
      backgroundImage: {
        "orange-button": "url('/assets/Orange Button.png')",
        "blue-button": "url('/assets/Blue Button.png')",
      },
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1347px",
        },
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
