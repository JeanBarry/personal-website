/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				superShadowWiggle: {
          '0%, 100%': { transform: 'translateX(-4px) translateY(-5px)' },
          '25%': { transform: 'translateX(4px) translateY(3px)'},
          '50%': { transform: 'translateX(-7px) translateY(3px)' },
          '75%': { transform: 'translateX(-4px) translateY(-3px)' },
				},
        shadowWiggle: {
          '0%, 100%': { transform: 'translateX(4px) translateY(3px)' },
          '25%': { transform: 'translateX(-4px) translateY(-5px)'},
          '50%': { transform: 'translateX(4px) translateY(-3px)' },
          '75%': { transform: 'translateX(-7px) translateY(-3px)' },
				},
        blink: {
          '0%': { opacity: '0' },
          '49%': {opacity: '0'},
          '50%': { opacity: '1' },
          '100%': { opacity: '1' },
        }
			},
      animation: {
        shadowWiggle: 'shadowWiggle 0.25s infinite',
        superShadowWiggle: 'superShadowWiggle 0.25s infinite',
        blink: 'blink 1s linear infinite'
      }
		},
	},
	plugins: [],
}
