import { defineComponent, PropType } from "vue";
import { bType, bSize } from "../../types/";


export const props = {
    type: {
        type: String as PropType<bType>,
        default: 'default'
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
}

export default defineComponent({
    name: 's-button',
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
        const { type, plain, round, size, icon } = props
        return () => (
            <button class={
                `
                ${size}-btn
                bg-${colors[type]}-${plain ? 100 : 500}
                hover:bg-${colors[type]}-${plain ? 500 : 300}
                text-${type === 'default' ? 'black' : plain ? colors[type] : 'white'}
                hover:text-${type === "default" ? "blue" : "white"}
                border-${type === "default" ? "white" : colors[type]}
                hover:border-${type === "default" ? "blue" : colors[type]}
                ${round ? "rounded-full" : ""}
                `
            }>
                {icon ? < i class={`i-ic-baseline-${icon} p-12`} /> : ''}
                {slots.default ? slots.default() : ""}
            </button>
        )
    }
})