import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["src/**/*.{astro,html,tsx,jsx,vue,svelte}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                primary: {
                    dark: "#7d57c2",
                    base: "#906cd2",
                    light: "#a686e0",
                },
                danger: {
                    dark: "#c65b5b",
                    base: "#d46c6c",
                    light: "#e38585",
                },
                success: {
                    dark: "#59c396",
                    base: "#6cd4a8",
                    light: "#81e3ba",
                },
                warning: {
                    dark: "#c3af5b",
                    base: "#d4c06c",
                    light: "#e2cf80",
                },
                info: {
                    dark: "#548dbc",
                    base: "#6ba3d1",
                    light: "#85b9e3",
                },
            },
        },
    },
    plugins: [
        addDynamicIconSelectors()
    ],
};
