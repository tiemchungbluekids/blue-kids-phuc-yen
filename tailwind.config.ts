import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        // gray: 'var(--gray)',
        'blue-kids-primary': '#2D85DE', // Xanh dương chủ đạo
        'blue-kids-secondary': '#35d461', // Xanh lá cây
        'blue-kids-accent': '#facc15', // Màu nhấn (có thể điều chỉnh)
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;