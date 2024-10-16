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
      },
    },
  },
  plugins: [],
};
export default config;
