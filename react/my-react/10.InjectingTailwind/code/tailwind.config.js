/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../Code/**/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: [
                "-apple-system",
                "ui-sans-serif",
                "system-ui",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
        },
    },
    plugins: [],
};
