/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontSize: {
            xxs: '0.5rem',
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',

        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'footer-texture': "url('../img/index_banner.png')",
            }

        },
        plugins: [],
    }
}