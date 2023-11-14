import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = ["white", "blue", "green", "gray", "yellow", "red"];

// 安全列表
const safelist = [
    ...colors.map((v) => `bg-${v}-100`),
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}-300`),
    ...colors.map((v) => `hover:bg-${v}-500`),
    ...colors.map((v) => `text-${v}`),
    ...colors.map((v) => `hover:text-${v}`),
    ...colors.map((v) => `border-${v}`),
    ...colors.map((v) => `hover:border-${v}`),
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

// 快捷方式
const shortcuts = {
    "base-btn": "px20 py12 text-14",
    "medium-btn": "px18 py10 text-14",
    "small-btn": "px16 py8 text-12",
    "mini-btn": "px14 py6 text-12",
};


export default () =>
    Unocss({
        /**
         * 自定义规则 
         * 下面这段重置颜色的规则，是为了让按钮颜色和element-ui一致
         */
        rules: [
            // ["bg-white-100", { "background-color": "#fff" }],
            // ["bg-blue-100", { "background-color": "#ecf5ff" }],
            // ["bg-green-100", { "background-color": "#f0f9eb" }],
            // ["bg-gray-100", { "background-color": "#f4f4f5" }],
            // ["bg-yellow-100", { "background-color": "#fdf6ec" }],
            // ["bg-red-100", { "background-color": "#fef0f0" }],
            ["bg-white-300", { "background-color": "#c6e2ff" }],
            // ["bg-blue-300", { "background-color": "#66b1ff" }],
            // ["bg-green-300", { "background-color": "#85ce61" }],
            // ["bg-gray-300", { "background-color": "#a6a9ad" }],
            // ["bg-yellow-300", { "background-color": "#ebb563" }],
            // ["bg-red-300", { "background-color": "#f78989" }],
            // ["bg-white-500", { "background-color": "#fff" }],
            // ["bg-blue-500", { "background-color": "#409eff" }],
            // ["bg-green-500", { "background-color": "#67c23a" }],
            // ["bg-gray-500", { "background-color": "#909399" }],
            // ["bg-yellow-500", { "background-color": "#e6a23c" }],
            // ["bg-red-500", { "background-color": "#f56c6c" }],
            // ["text-black", { color: "#606266" }],
            // ["text-white", { color: "#fff" }],
            // ["text-blue", { color: "#409eff" }],
            // ["text-green", { color: "#67c23a" }],
            // ["text-gray", { color: "#909399" }],
            // ["text-yellow", { color: "#e6a23c" }],
            // ["text-red", { color: "#f56c6c" }],
            ["border-white", { "border-color": "#dcdfe6" }],
            // ["border-blue", { "border-color": "#409eff" }],
            // ["border-green", { "border-color": "#67c23a" }],
            // ["border-gray", { "border-color": "#909399" }],
            // ["border-yellow", { "border-color": "#e6a23c" }],
            // ["border-red", { "border-color": "#f56c6c" }],
        ],
        safelist,
        shortcuts,
        presets: [
            presetUno(), // 一系列流行的原子化框架的 通用超集，包括了 Tailwind CSS，Windi CSS，Bootstrap，Tachyons 等
            presetAttributify(), // 属性化模式支持
            presetIcons(), // 图标
        ],
    });