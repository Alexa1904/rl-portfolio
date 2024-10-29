import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: 'var(--roboto)',
      sairaStencilOne: 'var(--saira)',
    },
    extend: {
      boxShadow: {
        shinningCard: '1px 1px 25px 10px rgba(146, 148, 248, 0.4)',
      },
      backgroundImage: {
        'tcs-background': "url('/images/TCS-background.jpeg')",
      },
      colors: {
        primary: {
          '50': '#FCF8F4',
          '100': '#F4EBDC',
          '200': '#EFE1CB',
          '300': '#E8D3B4',
          '400': '#E4CAA5',
          '500': '#DDBD8F',
          '600': '#C9AC82',
          '700': '#9D8666',
          '800': '#7A684F',
          '900': '#5D4F3C',
        },
        secondary: {
          '50': '#EBEBEB',
          '100': '#C2C2C2',
          '200': '#A4A4A4',
          '300': '#7A7A7A',
          '400': '#616161',
          '500': '#393939',
          '600': '#343434',
          '700': '#282828',
          '800': '#1F1F1F',
          '900': '#181818',
        },
        background: '#111111',
        foreground: 'var(--foreground)',
        shinningCard:
          'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%);',
      },
      animation: {
        'move-around': 'move 20s linear infinite',
        'slide-shinning': 'slide 1s infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(50px) translateY(-20px)' },
          '10%': { transform: 'translateX(200px) translateY(100px)' },
          '30%': { transform: 'translateX(0px) translateY(300px)' },
          '70%': { transform: 'translateX(700px) translateY(0px)' },
          '90%': { transform: 'translateX(1170px) translateY(400px)' },
          '100%': { transform: 'translateX(900px) translateY(700px)' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
