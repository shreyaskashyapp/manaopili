/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ["class"], // Enables dark mode with a class (e.g., <html class="dark">).
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.02em',
			normal: '0',
			wide: '0.02em',
			wider: '0.05em',
			widest: '0.1em',
		  },
      fontFamily: {
        heading: ['Degular', ...defaultTheme.fontFamily.sans], // Custom heading font
        sans: ['Degular', ...defaultTheme.fontFamily.sans], // Default sans-serif
		sans: ['Tahoma', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Define custom CSS variables for better theming
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)', // Large border radius
        md: 'calc(var(--radius) - 2px)', // Medium border radius
        sm: 'calc(var(--radius) - 4px)', // Small border radius
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Includes Tailwind CSS animations
};
