// tailwind.config.js
module.exports = {
  // mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  // more options here
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      reddish: "#e23655",
      blackish: "#151418",
      greyish: "#242329",
      whitish: "#FBFBFF",
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 4s linear infinite",
      },
    },
  },
};
