/** @type {import('tailwindcss').Config} */
export default {
  // Configura los archivos donde Tailwind buscará clases (src/*/)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define una fuente de sistema por defecto (Inter) para todo el proyecto
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Claves de animación CSS para efectos de IU
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      }
    },
  },
  plugins: [],
}