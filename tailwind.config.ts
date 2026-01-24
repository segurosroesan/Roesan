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
                    DEFAULT: '#514b84', // Morado Roesan
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#01bbef', // Cyan Roesan
                    foreground: '#ffffff',
                },
                purple: {
                    400: '#6b67a8',  // Lighter variation
                    500: '#514b84',  // Primary
                    600: '#3f3a6e',  // Darker variation
                    800: '#2a2960',  // Dark purple
                    900: '#1e1d4a',  // Darkest
                },
                cyan: {
                    400: '#20febe',  // Turquoise light
                    500: '#01bbef',  // Primary cyan
                    600: '#0099cc',  // Darker cyan
                },
                yellow: {
                    400: '#f6ef45',  // Accent yellow
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
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
