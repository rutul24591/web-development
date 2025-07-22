// tailwind.config.js
module.exports = {
    // ...existing config
    content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./index.html"], // Make sure this matches your file structure!
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["cyberpunk", "light", "dark"],
        default: "cyberpunk",
    },
};
