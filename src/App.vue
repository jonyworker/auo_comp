<script setup>
import { ref, computed } from "vue";
import AIcon from "@/components/misc/BaseIcon.vue";
import AAvatar from "@/components/misc/Avatar.vue";
import AAvatarGroup from "@/components/misc/AvatarGroup.vue";
import ABreadcrumbItem from "@/components/misc/BreadcrumbItem.vue";
import ABreadcrumb from "@/components/misc/Breadcrumb.vue";
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
const breadcrumbData = [
    {
        label: "Home",
        url: "",
    },
    {
        label: "Project",
        url: "",
    },
    {
        label: "Now Page",
        url: "",
    },
];
</script>

<template>
    <a-breadcrumb :data="breadcrumbData"></a-breadcrumb>
    <a-breadcrumbItem icon="home">Home</a-breadcrumbItem>
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
    <a-icon name="MdiArrowBottomLeftThinCircleOutline" size="50"></a-icon>
</template>

<style scoped></style>
