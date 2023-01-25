module.exports = {
  tailwindConfig: "./tailwind.config.js",
  plugins: [
    require("prettier-plugin-twig-melody"),
    require("prettier-plugin-twig-enhancements"),
    require("@trivago/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
};