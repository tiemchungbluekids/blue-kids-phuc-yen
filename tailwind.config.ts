import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        gray: 'var(--gray)',
        'blue-kids-primary': '#2D85DE', // Xanh dương
        'blue-kids-secondary': '#35d461', // Xanh lá cây
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;