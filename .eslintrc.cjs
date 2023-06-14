/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier/skip-formatting"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },

    rules: {
        "no-extra-semi": 2, //不允许出现不必要的分号
        "vue/multi-word-component-names": 0
    }
};
