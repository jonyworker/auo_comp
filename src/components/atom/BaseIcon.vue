<script setup>
import { computed, ref, defineAsyncComponent } from "vue";
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: false,
        default: 24,
        // validator: (value) =>
        //     ["primary", "secondary", "success", "danger", "warning"].includes(
        //         value
        //     ),
    },
    color: {
        type: String,
        default: "#000",
    },
});

const iconComponent = defineAsyncComponent(() =>
    import(`../../assets/icons/${props.name}.svg`)
);
</script>

<template>
    <component
        :is="iconComponent"
        :width="props.size"
        :height="props.size"
        :stroke="props.color"
    />
</template>

<style lang="scss" scoped></style>
