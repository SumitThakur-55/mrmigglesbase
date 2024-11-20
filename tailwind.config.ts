import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'white',
        'Hero': 'rgb(0, 82, 254)',
        'para': 'rgb(79, 88, 116) ',
        'light': '#E6EDFA'

      },
      screens: {
        'md': '810px',
        'lg': '1199px'
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(180deg, rgb(77, 155, 255) 0%, rgb(51, 120, 254) 45.95%, rgb(0, 66, 204) 100%)',
        'blue-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%);'
      },
      fontWeight: {
        extraLight: '200',
        thin: '100',
        light: '400',
        medium: '500',
        semiBold: '600',
        extraBold: '800',
        black: '900',
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' },
        },
        scrollReverse: {
          from: { transform: 'translateX(calc(-100% - 1rem))' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        scrollReverse: 'scrollReverse 20s linear infinite',
      },

    },
  },
  plugins: [],
} satisfies Config;
