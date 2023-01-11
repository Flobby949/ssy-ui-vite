import { defineComponent, PropType } from "vue";
import "uno.css";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  color: {
    type: String as PropType<IColor>,
    default: "purple",
  },
};

export default defineComponent({
  name: "SLink",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return () => (
      <a
        class={` 
              py-${size[props.size].y}
              px-${size[props.size].x}
              cursor-pointer
              text-${props.color + "-500"}
              text-${size[props.size].text}
              hover:bg-${props.color}-400
              hover:text-white`}
      >
        <span>{slots.default ? slots.default() : "默认链接"}</span>
      </a>
    );
  },
});
