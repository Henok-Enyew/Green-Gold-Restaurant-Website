/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#09150c",
        // "bg-primary": "#1F4529",
        primary: "#FCF596",
        "primary-bold": "#FABC3F",
      },
      cursor: {
        custom: "url('cursor.svg'), auto",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(165deg, rgba(43,40,0,1) 0%, rgba(9,21,12,1) 100%)",
      },
    },
  },
  plugins: [],
  // daisyui: {
  //   theme: false,
  // },
};
