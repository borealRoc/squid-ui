import { defineComponent, PropType } from "vue";
import { bType, bSize } from "../../types/";
import "uno.css";

export const props = {
  type: {
    type: String as PropType<bType>,
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<bSize>,
    default: "base",
  },
  icon: {
    type: String,
    default: "",
  },
};

export default defineComponent({
  name: "s-button",
  props,
  setup(props, { slots }) {
    const colors = {
      default: "white",
      primary: "blue",
      success: "green",
      info: "gray",
      warning: "yellow",
      danger: "red",
    };
    // 40:11  error  Getting a value from the `props` in root scope of `setup()` will cause the value to lose reactivity  vue/no-setup-props-destructure
    // setup 中接受的props是响应式的， 当传入新的 props 时，会及时被更新。由于是响应式的， 所以不可以使用 ES6 解构，解构会消除它的响应式
    // const { type, plain, round, size, icon } = props;
    return () => (
      <button
        class={`
          s-btn
          ${props.size}-btn
          bg-${colors[props.type]}-${props.plain ? 100 : 500}
          hover:bg-${colors[props.type]}-${props.plain ? 500 : 300}
          text-${
            props.type === "default"
              ? "black"
              : props.plain
              ? colors[props.type]
              : "white"
          }
          hover:text-${props.type === "default" ? "blue" : "white"}
          border-${props.type === "default" ? "white" : colors[props.type]}
          hover:border-${props.type === "default" ? "blue" : colors[props.type]}
          ${props.round ? "rounded-full" : ""}
        `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`} />
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
