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
      fontFamily: {
        "DanaBold": "DanaBold",
        "DanaRegular": "DanaRegular",
      },
    },
    plugins: [],
  },
};

//تمامی شخصی سازی ها اینجا انجام میشه
