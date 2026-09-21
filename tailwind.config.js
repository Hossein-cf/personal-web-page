/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                archivo: ['Archvo', 'monospace'],
                fira: ['"Fira Code"', 'monospace']
            },
            colors: {
                'dark-navy': 'var(--dark-nevy)',
                navy: 'var(--nevy)',
                'light-slate': 'var(--light-slate)',
                green: 'var(--green)',
                'lightest-slate': 'var(--lightest-slate)',
                slate: 'var(--slate)'
            }
        }
    },
    plugins: []
}