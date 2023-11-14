import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const RenderButton = defineComponent({
  name: "RenderButton",
  render() {
    return h("button", null, "Render Button");
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { "py-10": "" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const props = {
  type: {
    type: String,
    default: "default"
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "base"
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = defineComponent({
  name: "s-button",
  props,
  setup(props2, {
    slots
  }) {
    const colors = {
      default: "white",
      primary: "blue",
      success: "green",
      info: "gray",
      warning: "yellow",
      danger: "red"
    };
    const {
      type,
      plain,
      round,
      size,
      icon
    } = props2;
    return () => createVNode("button", {
      "class": `
                ${size}-btn
                bg-${colors[type]}-${plain ? 100 : 500}
                hover:bg-${colors[type]}-${plain ? 500 : 300}
                text-${type === "default" ? "black" : plain ? colors[type] : "white"}
                hover:text-${type === "default" ? "blue" : "white"}
                border-${type === "default" ? "white" : colors[type]}
                hover:border-${type === "default" ? "blue" : colors[type]}
                ${round ? "rounded-full" : ""}
                `
    }, [icon ? createVNode("i", {
      "class": `i-ic-baseline-${icon} p-12`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const index$1 = "";
const __uno = "";
const index = {
  install(app) {
    app.component(RenderButton.name, RenderButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(Button.name, Button);
  }
};
export {
  JSXButton,
  RenderButton,
  Button as SButton,
  SFCButton,
  index as default
};
