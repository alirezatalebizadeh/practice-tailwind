/** @type {import('tailwindcss').Config} */
module.exports = {
  //تمامی فایل هایی که قراره توش از تیلویند استفاده کنیم باید تو کانتنت نوشته بشن
  content: ["./public/*.html"],
  theme: {
    container: {
      center: true,
      padding: "5rem",
    },
    extend: {
      colors: {
        primary: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          DEFAULT: "#06b6d4",
        },
      },
      spacing: {
        "22": "5.5rem",
        "26": "7rem",
        "32": "9.5rem",
      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "1024px",
      },
    },
    plugins: [],
  },
};

//تمامی شخصی سازی ها اینجا انجام میشه
