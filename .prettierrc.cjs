module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [require("prettier-plugin-astro")],
  overrides: [
    {
      files: "**/*astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
