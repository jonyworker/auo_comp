<script setup>
import { ref } from "vue";
import AIcon from "@/components/misc/BaseIcon.vue";

const props = defineProps({
    icon: {
        type: String,
    },
    iconOnly: {
        type: Boolean,
    },
    home: {
        type: Boolean,
    },
});
</script>

<template>
    <a class="breadcrumbItem" href="#">
        <a-icon v-if="props.home" name="home" size="16" class="mr-8"></a-icon>
        <slot v-if="!iconOnly"></slot>
    </a>
</template>

<style scoped>
.breadcrumbItem {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: #374151;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
}
</style>
