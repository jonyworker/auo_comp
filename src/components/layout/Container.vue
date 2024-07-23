<script>
import { defineComponent, h } from "vue";

export default defineComponent({
    props: {
        size: {
            type: String,
            required: false,
            default: "",
            validator: (value) =>
                ["sm", "md", "lg", "xl", "xxl"].includes(value),
        },
        fluid: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { slots }) {
        const containerClass = {
            container: props.size === "",
            "container-sm": props.size === "sm",
            "container-md": props.size === "md",
            "container-lg": props.size === "lg",
            "container-xl": props.size === "xl",
            "container-fluid": props.fluid,
        };

        return () =>
            h(
                "div",
                {
                    class: containerClass,
                },
                slots.default && slots.default()
            );
    },
});
</script>
