import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "no-unused-vars": 1,
      "no-console": "warn",
      "no-debugger": "warn",
      "vue/html-self-closing": 0,
      "vue/multi-word-component-names": "off",
      "vue/no-undef-properties": "error",
      "vue/require-v-for-key": "warn",
      "vue/block-order": ["warn", {
        "order": [["script", "template"], "style"]
      }],
      "vue/component-api-style": ["warn",
        ["script-setup", "composition"]
      ]
    }
  }
];
