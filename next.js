/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: "plugin:@next/next/recommended",
  overrides: [
    {
      files: "./next-env.d.ts",
      rules: { "misc/sort-top-comments": "off" }
    }
  ]
};

module.exports = config;
