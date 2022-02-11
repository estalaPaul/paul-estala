const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.tsx'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            gray: '#64748B'
        },
        extend: {
            fontFamily: {
                sans: [
                    'Raleway',
                    ...defaultTheme.fontFamily.sans,
                ]
            }
        },
    },
    plugins: [],
}
