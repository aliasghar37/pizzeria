/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                alphaPrimary: "#ffffff80",
                alphaSecondary: "#00767633",
                cardHover: "#dce8ec",
                borderColor: "#e2e0e0",
                borderShadow: "#cbd8dc",
                black: "#000"
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#fff",
                    secondary: "#007676",
                    accent: "#dce8ec",
                    neutral: "#ffffff",
                    "base-100": "#111827",
                    info: "#06b6d4",
                    success: "#10b981",
                    warning: "#d97706",
                    error: "#e11d48",
                },
            },
        ],
    },
};
