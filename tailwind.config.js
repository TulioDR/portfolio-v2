/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/containers/**/*.{js,ts,jsx,tsx}",
      "./src/animations/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         aspectRatio: {
            "16/9": "16 / 9",
         },
         minWidth: {
            "1/2": "50%",
            "2/3": "66.6666%",
         },
         transitionTimingFunction: {
            modern: "cubic-bezier(0.645, 0.045, 0.355, 1)",
         },
         colors: {
            primary: "var(--color-primary)",
            primaryDark: "var(--color-primaryDark)",
            secondary: "var(--color-secondary)",
         },
         backgroundPosition: {
            "1/2": "50%",
         },
      },
   },
   plugins: [],
};
