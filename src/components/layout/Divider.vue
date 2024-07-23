<script setup>
import { ref, computed } from "vue";
const props = defineProps({
    thickness: {
        type: [Number, String],
        default: "1",
    },
    color: {
        type: String,
        default: "#334155",
        TODO: 顏色確認後修改,
        // validator: (value) =>
        //     ["primary", "secondary", "success", "danger", "warning"].includes(
        //         value
        //     ),
    },
    vertical: {
        type: Boolean,
    },
});
console.log(typeof props.thickness);
const borderThickness = computed(() => {
    return {
        height: props.vertical ? "100%" : `${props.thickness}px`,
        width: props.vertical ? `${props.thickness}px` : "100%",
        margin: props.vertical ? "0 1rem" : "1rem 0",
        backgroundColor: `${props.color}`,
    };
});
</script>

<template>
    <div class="divider" :style="borderThickness"></div>
</template>

<style scoped>
.divider {
    flex-shrink: 0;
    opacity: 0.15;
}
</style>
