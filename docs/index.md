# 🔨 Squid-UI 是什么?

一个 Mini 版的组件库，基于 Vite + Vue3 + TS 技术栈

## Features

- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions

## Install

```bash
npm i squid-ui 
```

## Quick Start

```js
import Vue from "vue";
import SquidUI from "squid-ui"

const App = {
  template:`<s-button/>`,
};

createApp(App).use(SquidUI).mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.
