/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			white: {
  				'100': '#F8F8F8',
  				'200': '#FAFAFA',
  				'300': '#F0F0F0',
  				'400': '#EAEAEA'
  			}
  		},
  		fontFamily: {
  			rubik: 'Rubik'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

