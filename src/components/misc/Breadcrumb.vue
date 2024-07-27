<script setup>
import { ref } from "vue";
import AIcon from "@/components/misc/BaseIcon.vue";
import ABreadcrumbItem from "@/components/misc/BreadcrumbItem.vue";

const props = defineProps({
    data: {
        type: Object,
        default: null,
    },
});
</script>

<template>
    <ul class="breadcrumb-list">
        <li class="breadcrumb-list" v-for="(item, index) in props.data">
            <a-icon
                name="arrow-forward"
                size="16"
                class="ml-12 mr-8"
                v-if="index !== 0"
            ></a-icon>
            <a-breadcrumbItem :home="index === 0">{{
                item.label
            }}</a-breadcrumbItem>
        </li>
    </ul>
</template>

<style scoped>
.breadcrumb-list,
.breadcrumb-list-item {
    display: flex;
    align-items: center;
}
</style>
