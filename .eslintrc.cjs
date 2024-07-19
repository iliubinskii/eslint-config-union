/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  ignorePatterns: ["!.*", "/node_modules/**"],
  env: {
    browser: true,
    es2022: true
  },
  extends: "./index.cjs",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    project: "tsconfig.json",
    sourceType: "module"
  },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        cspell: {
          words:
            // @sorted
            ["cjsx", "escompat", "mjsx", "packagejson", "sonarjs"]
        }
      }
    ]
  }
};

module.exports = config;
