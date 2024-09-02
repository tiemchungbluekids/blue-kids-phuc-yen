import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'blue-kids-primary': '#2D85DE', // Xanh dương
        'blue-kids-secondary': '#35d461', // Xanh lá cây
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;