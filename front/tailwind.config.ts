import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Ativa o modo noturno via classe 'dark'
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
        'neutral-700':'#3C3C3C',
        'azul-busca':'#222037',

        // Cores para o modo noturno
        'neutral-800':'#1F1F1F',
        'neutral-900':'#121212',
        'dark-primary-white':'#2A2A2A',
        'dark-primary-gray':'#1C1C1C',
        'dark-primary-red':'#B71C1C',
        'dark-primary-yellow':'#FFB347',
      }
    },
  },
  plugins: [],
};

export default config;
