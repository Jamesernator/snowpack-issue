"use strict";
const path = require("path");
const createEslintConfig = require("@jsxt/eslint-config");

module.exports = createEslintConfig({
    project: path.join(__dirname, "./tsconfig.eslint.json"),
});