/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primRed: "#FF6961",
        darkRed: "#B71C1C",
        lightRed: "#FFCDD2",
        lightGray: "#F5F5F5",
        darkGray: "#757575",
        matteBlack: "#212121",
        softPink: "#FFEBEE",
        blue: "#0056B3",
      },
    },
  },
  plugins: [],
};
