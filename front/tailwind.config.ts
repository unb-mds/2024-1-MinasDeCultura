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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-gray':'#EBECEE',
        'primary-white':'#FFFFFF',
        'primary-red':'#ED1C24',
        'primary-yellow':'#FFC06B',
        'neutral-700':'#3c3c3c',
        'azul-busca':'#222037'
      }

    },
  },
  plugins: [],
};
export default config;
