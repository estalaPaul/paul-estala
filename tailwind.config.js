// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.tsx',
    ],
    safelist: [
        'h-20',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            gray: '#475569',
        },
        extend: {
            fontFamily: {
                sans: [
                    'Raleway',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            animation: {
                'fade-in-from-bigger': 'fade-in-from-bigger 1.5s',
            },
            keyframes: {
                'fade-in-from-bigger': {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(1.15)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
}
