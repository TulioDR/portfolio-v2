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
         height: {
            125: "31.25rem",
         },
         width: {
            125: "31.25rem",
         },
         aspectRatio: {
            "16/9": "16 / 9",
         },
         minWidth: {
            "1/2": "50%",
            "2/3": "66.6666%",
         },
         minHeight: {
            80: "20rem",
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
         fontFamily: {
            dancing: "'Dancing Script', cursive",
         },
         keyframes: {
            "bounce-horizontal": {
               "0%, 100%": {
                  transform: "translateX(-25%)",
                  animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
               },
               "50%": {
                  transform: "translateX(0)",
                  animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
               },
            },
         },
         animation: {
            "bounce-horizontal": "bounce-horizontal 1s infinite",
         },
      },
   },
   plugins: [
      require("tailwindcss-scoped-groups")({
         groups: ["one", "two"],
      }),
   ],
};
