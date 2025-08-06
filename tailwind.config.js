// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        italic: ["Raleway", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#FFFFFF80",
          secondary: "#f5f5f5",
          tertiary: "#021015",
          fourth: "#F5F5F5",
        },
        btn: {
          primary: "#ADADAD",
          hover: "#D33333",
        },
        default: "#8C9792",
        nav: "#4C4C4C",
        icon: "#404040",
        title: "#0E1015",
      },
      spacing: {
        space: "24px",
      },
      margin: {
        "t-1": "32px",
        "t-2": "24px",
        "c-1": "24px",
        "s-1": "96px",
      },
      gap: {
        space: "24px",
      },
      height: {
        nav: "76px",
      },
      fontSize: {
        default: "14px",
        h1: "60px",
        h3: "24px",
        strong: "30px",
        nav: "13px",
        a: "12px",
      },
      fontWeight: {
        strong: "700",
        nav: "500",
      },
      padding: {
        "btn-lg": "17px 30px",
        "btn-md": "20px 10px",
        "btn-sm": "14px 7px",
      },
      maxWidth: {
        container: "1140px",
      },
    },
  },
  plugins: [],
};
