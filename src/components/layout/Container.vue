<script>
import { defineComponent, h } from "vue";

export default defineComponent({
    props: {
        fluid: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { slots }) {
        const containerClass = {
            container: !props.fluid,
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
