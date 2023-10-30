/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        mediumseagreen: "#25ab75",
        crimson: "#fb1351",
        gold: "#ffe642",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "181xl": "200px",
      },
    },
    fontSize: {
      "6xl": "25px",
      sm: "14px",
      "31xl": "50px",
      xl: "20px",
      lg: "18px",
      smi: "13px",
      xs: "12px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
