import { defineComponent } from "vue";
import "uno.css";

export default defineComponent({
  name: "s-button",
  setup(props, { slots }) {
    return () => (
      <button
        class={`
          px-4 
          py-2
          border-none
          rounded-lg 
          font-semibold
          text-white
          bg-green-500
          hover:bg-green-700
          shadow-md
          cursor-pointer      
        `}>
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
