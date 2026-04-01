import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: '#51408d', // Morado Roesan Principal
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#61bbe4', // Cyan Roesan
                    foreground: '#ffffff',
                },
                purple: {
                    400: '#6e5fa3',  // Lighter variation
                    500: '#51408d',  // Primary
                    600: '#3a2f7a',  // Darker variation
                    800: '#2a2960',  // Dark purple
                    900: '#201e3e',  // Darkest (Navy)
                },
                cyan: {
                    400: '#89d4f0',  // Lighter cyan
                    500: '#61bbe4',  // Primary cyan
                    600: '#46a1cc',  // Darker cyan
                },
                yellow: {
                    400: '#fddf45',  // Accent yellow
                },
            },
            fontFamily: {
                sans: ["var(--font-roboto)", "sans-serif"],
                serif: ["var(--font-philosopher)", "serif"],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scroll': 'scroll 30s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'shimmer': 'shimmer 2.5s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
