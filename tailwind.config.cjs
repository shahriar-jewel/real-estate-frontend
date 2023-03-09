/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "0",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
        },
        extend: {
            container: {
                center: true,
                padding: "15px",
            },

            colors: {
                primary: "#b38e57",
                secondary: "#a4814f",
                heading: "#46484a",
                body: "#181b1e",
                border_color: "#dedede",
                grey: "#dbdbdb"
            },

            fontFamily: {
                frank: ["'Frank Ruhl Libre', serif"],
                muli: ["'muli'"],
            },

            animation: {
                fadeIn: "fadeIn 1s linear  forwards",
                zoomIn: "zoomIn 1s linear  infinite",
            },

            keyframes: {
                fadeIn: {
                    from: {
                        opacity: 0,
                        transform: "translateY(3rem)",
                    },
                    to: {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
                zoomIn: {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "50%": {
                        transform: "scale(1.3)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
                dropShadow: {
                    custom: "0 1px 2px rgb(0 0 0 / 25%);",
                },
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    "@screen xs": {
                        maxWidth: "100%",
                    },
                    "@screen sm": {
                        maxWidth: "540px",
                    },
                    "@screen md": {
                        maxWidth: "720px",
                    },
                    "@screen lg": {
                        maxWidth: "960px",
                    },
                    "@screen xl": {
                        maxWidth: "1200px",
                    },
                },
            });
        },

        require("tailwind-scrollbar"),
    ],
};
