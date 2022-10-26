import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = ["white", "blue", "green", "gray", "yellow", "red"];
const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `text-${v}`),
  `text-black`,
  ...colors.map((v) => `hover:text-${v}`),
  ...colors.map((v) => `border-${v}`),
  ...colors.map((v) => `hover:border-${v}`),
  "base-btn",
  "medium-btn",
  "small-btn",
  "mini-btn",
  ...["search", "edit", "check", "message", "delete", "add", "share"].map(
    (v) => `i-ic-baseline-${v}`
  ),
];

const shortcuts = {
  "s-btn":
    "box-border m-1 border-1 border-rd text-base  text-white font-500 cursor-pointer",
  "base-btn": "px5 py3 text-3.5",
  "medium-btn": "px4.5 py2.5 text-3.5",
  "small-btn": "px4 py2 text-3",
  "mini-btn": "px3.5 py1.5 text-3",
};

export default () =>
  Unocss({
    rules: [
      ["text-base", { "line-height": 1 }],

      ["text-black", { color: "#606266" }],
      ["text-white", { color: "#fff" }],
      ["text-blue", { color: "#409eff" }],
      ["text-green", { color: "#67c23a" }],
      ["text-gray", { color: "#909399" }],
      ["text-yellow", { color: "#e6a23c" }],
      ["text-red", { color: "#f56c6c" }],

      ["bg-white-100", { "background-color": "#fff" }],
      ["bg-blue-100", { "background-color": "#ecf5ff" }],
      ["bg-green-100", { "background-color": "#f0f9eb" }],
      ["bg-gray-100", { "background-color": "#f4f4f5" }],
      ["bg-yellow-100", { "background-color": "#fdf6ec" }],
      ["bg-red-100", { "background-color": "#fef0f0" }],
      ["bg-white-300", { "background-color": "#c6e2ff" }],
      ["bg-blue-300", { "background-color": "#66b1ff" }],
      ["bg-green-300", { "background-color": "#85ce61" }],
      ["bg-gray-300", { "background-color": "#a6a9ad" }],
      ["bg-yellow-300", { "background-color": "#ebb563" }],
      ["bg-red-300", { "background-color": "#f78989" }],
      ["bg-white-500", { "background-color": "#fff" }],
      ["bg-blue-500", { "background-color": "#409eff" }],
      ["bg-green-500", { "background-color": "#67c23a" }],
      ["bg-gray-500", { "background-color": "#909399" }],
      ["bg-yellow-500", { "background-color": "#e6a23c" }],
      ["bg-red-500", { "background-color": "#f56c6c" }],

      ["border-white", { "border-color": "#dcdfe6" }],
      ["border-blue", { "border-color": "#409eff" }],
      ["border-green", { "border-color": "#67c23a" }],
      ["border-gray", { "border-color": "#909399" }],
      ["border-yellow", { "border-color": "#e6a23c" }],
      ["border-red", { "border-color": "#f56c6c" }],
    ],
    shortcuts,
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
