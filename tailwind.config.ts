import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      // padding: '2rem',
    },
    extend: {
      textColor: {
        'transparent': 'transparent',
      },
      padding: {
        '181px': '181px',
      },
      colors:{
        authgray:'#6a6d78',
        authblack:'#131722',
        linkHoverMainBg: '#fff3',
        mainBackGround: '#060606'
      },

    },
  },
  plugins: [],
}
export default config
