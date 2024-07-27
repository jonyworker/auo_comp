<script setup>
import { ref, computed } from "vue";
import AIcon from "@/components/misc/BaseIcon.vue";
import AAvatar from "@/components/misc/Avatar.vue";
import AAvatarGroup from "@/components/misc/AvatarGroup.vue";
const avatars = [
    {
        name: "jony wu",
        imgUrl: "",
    },
    {
        name: "mike cheng",
        imgUrl: "src/assets/fakeImg/avatar_02.jpg",
    },
    {
        name: "ray Li",
        imgUrl: "src/assets/fakeImg/avatar_03.jpg",
    },
    {
        name: "dick Huang",
        imgUrl: "src/assets/fakeImg/avatar_04.jpg",
    },
];
</script>

<template>
    <a-avatarGroup :data="avatars" limit="10"></a-avatarGroup>
    <hr />
    <a-avatar type="image" size="sm" rounded></a-avatar>
    <a-avatar
        type="initial"
        size="sm"
        status="busy"
        status-position="br"
        rounded
    ></a-avatar>
    <a-avatar type="icon" size="sm" rounded></a-avatar>
    <a-avatar type="more" size="sm" rounded></a-avatar>
    <a-icon name="finger-print" size="50"></a-icon>
</template>

<style scoped></style>
