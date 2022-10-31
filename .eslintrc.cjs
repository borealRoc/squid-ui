module.exports = {
    // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直找到根目录。
    // 当寻找到项目根目录的 eslintrc.js 时，我们希望它停止向上查找。
    // 那么此时 Eslint 的配置文件也支持设置 root: true 的选项来停止这种层叠配置的查找机制
    root: true,
    // 告诉 EsLint 当前项目支持的运行环境，从而可以使用当前环境下相关的全局变量
    env: {
      browser: true,
      es2020: true,
      node: true,
      jest: true,
    },
    // 告诉 EsLint 来支持自定义的全局变量
    globals: {
      ga: true,
      chrome: true,
      __DEV__: true,
    },
    // 语言选项设置
    parserOptions: {
      parser: "@typescript-eslint/parser", // 解析 .ts 文件
    },
    // Eslint 在解析代码时使用到的解析器
    parser: "vue-eslint-parser", // 解析 .vue 文件
    // 通常在我们使用 Eslint 来检查我们的代码时，需要将解析器替换为 @typescript-eslint/parser 的同时
    // 针对于一些 TypeScript 特定语法我们还需要使用 @typescript-eslint/eslint-plugin 来支持一些特定的 TS 语法检查
    // 当我们在 Plugins 中声明对应的插件后，就可以在 rules 配置中使用对应插件中声明的特殊规则限制了.
    // 简单点来说，所谓的 Plugin 正是对于 EsLint 内置的规则拓展，通过 Plugin 机制我们可以实现 EsLint 中自定义的 Rules
    // plugins: ["@typescript-eslint/eslint-plugin"],
    plugins: ['@typescript-eslint'],
    // 继承一些通用的eslist配置
    extends: [
      "plugin:json/recommended",
      "plugin:vue/vue3-essential",
      "eslint:recommended", // EsLint 官方 rules
      "@vue/prettier",
    ],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "prettier/prettier": "error",
    },
  };
  