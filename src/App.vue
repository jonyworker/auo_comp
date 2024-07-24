<script setup>
import ACol from "./components/layout/Col.vue";
import ARow from "./components/layout/Row.vue";
import AContainer from "./components/layout/Container.vue";
import AIcon from "@/components/atom/BaseIcon.vue";
import ADivider from "@/components/layout/Divider.vue";
import AButton from "@/components/atom/Button.vue";
import AAvatar from "@/components/atom/Avatar.vue";
</script>

<template>
    <a-avatar shape="circle" type="image" size="sm"></a-avatar>
    <a-avatar shape="circle" type="label" size="sm"></a-avatar>
    <a-avatar shape="circle" type="icon" size="sm"></a-avatar>
    <a-avatar shape="circle" type="more" size="sm"></a-avatar>
    <a-icon name="academi" size="20"></a-icon>
    <a-container size="sm" class="border-1">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            iure vero, minus laborum laboriosam expedita perferendis dolores
            aliquid aspernatur in blanditiis maiores. Beatae itaque voluptatum
            dignissimos, molestiae quidem ipsa veritatis?
        </p>
        <a-button prependIcon="academi" type="filled" themeColor="error"
            >button</a-button
        >
    </a-container>
    <div class="d-flex flex-column" style="border: 1px solid red">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a-divider></a-divider>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>

    <a-icon name="finger-print" size="500"></a-icon>
</template>

<style scoped></style>
