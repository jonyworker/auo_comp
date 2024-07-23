<script>
import { defineComponent, h } from "vue";
import { BS_SPACE } from "../../constant/constant.js";

export default defineComponent({
    props: {
        justify: {
            type: String,
            validator: (value) => BS_SPACE.includes(value),
        },
        align: {
            type: String,
            validator: (value) => BS_SPACE.includes(value),
        },
        noGutters: {
            type: Boolean,
            default: false,
        },
        rowCols: {
            type: String,
        },
    },
    setup(props, { slots }) {
        const intNum = Number.parseInt(props.rowCols);
        const classes = {
            row: true,
            "no-gutters": props.noGutters,
            [`justify-content-${props.justify}`]: props.justify,
            [`align-items-${props.align}`]: props.align,
            [`row-cols-${intNum}`]: intNum > 0 && intNum < 7,
        };

        return () =>
            h(
                "div",
                {
                    class: classes,
                },
                slots.default && slots.default()
            );
    },
});
</script>

<style lang="scss" scoped></style>
