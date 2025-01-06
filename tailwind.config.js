/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'], // Enables class-based dark mode
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
                },
                dark: {
                    '100': '#1A202C', // Dark mode background
                    '200': '#2D3748', // Dark mode accents
                    '300': '#4A5568',
                    '400': '#718096'
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
