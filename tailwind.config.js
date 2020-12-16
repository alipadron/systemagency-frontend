module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: ["**/*.html", "**/*.ts"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    maxHeight: ["group-hover", "responsive"],
  },
  plugins: [],
};
