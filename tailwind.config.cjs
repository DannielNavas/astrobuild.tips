module.exports = {
  content: ["./src/**/*/*.{astro,html,js,jsx,tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
