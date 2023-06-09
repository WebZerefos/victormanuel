/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		maxWidth: {
			container: "1440px",
			contentContainer: "1140px",
			containerSmall: "1024px",
			containerxs: "768px",
		},
		extend: {
			screens: {
				xs: "320px",
				sm: "375px",
				sml: "500px",
				md: "667px",
				mdl: "768px",
				lg: "960px",
				lgl: "1024px",
				xl: "1280px",
			},
			fontFamily: {
				bodyFont: ["Poppins", "sans-serif"],
				titleFont: ["Montserrat", "sans-serif"],
			},
			colors: {
				bodyColor: "#212428",
				lightText: "#c4cfde",
				boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
				designColor: "#ff6f69",
			},
			boxShadow: {
				shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
}
