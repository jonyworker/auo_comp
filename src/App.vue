<script setup>
import { ref, computed } from "vue";
import AIcon from "@/components/misc/BaseIcon.vue";
import AAvatar from "@/components/misc/Avatar.vue";
import AAvatarGroup from "@/components/misc/AvatarGroup.vue";
const avatars = [
    {
        name: "jony wu",
        imgUrl: "",
        status: "busy",
    },
    {
        name: "mike cheng",
        imgUrl: "src/assets/fakeImg/avatar_02.jpg",
        status: "busy",
    },
    {
        name: "ray Li",
        imgUrl: "src/assets/fakeImg/avatar_03.jpg",
        status: "busy",
    },
    {
        name: "dick Huang",
        imgUrl: "src/assets/fakeImg/avatar_04.jpg",
        status: "busy",
    },
];
</script>

<template>
    <a-avatarGroup :data="avatars" limit="2"></a-avatarGroup>
    <hr />
    <a-avatar shape="circle" type="image" size="sm"></a-avatar>
    <a-avatar shape="circle" type="initial" size="sm"></a-avatar>
    <a-avatar shape="circle" type="icon" size="sm"></a-avatar>
    <a-avatar shape="circle" type="more" size="sm" limit="20"></a-avatar>
    <a-icon name="finger-print" size="50"></a-icon>
</template>

<style scoped></style>
