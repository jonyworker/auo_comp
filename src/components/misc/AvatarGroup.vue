<script setup>
import { computed, ref } from "vue";
import AAvatar from "@/components/misc/Avatar.vue";
const props = defineProps({
    data: {
        type: Object,
        default: null,
    },
    limit: {
        type: [Number, String],
        default: 4,
        require: true,
    },
});

const dataCopy = props.data.slice(0, props.limit);
const moreLabel = computed(() => {
    const lengthLeft = props.data.length - Number(props.limit);

    if (lengthLeft > 0 && lengthLeft < 99) {
        return lengthLeft + "";
    } else if (lengthLeft <= 0) {
        return lengthLeft + "";
    } else {
        return 99 + "";
    }
});

const initialName = (fullName) => {
    const initials = fullName
        .split(" ")
        .map((word) => word[0].toUpperCase())
        .join("");
    return initials;
};
</script>

<template>
    <div class="avatar-group">
        <!-- 當有圖片時顯示 -->
        <a-avatar
            v-for="(avatar, index) in dataCopy"
            :type="
                Boolean(avatar.imgUrl)
                    ? 'image'
                    : Boolean(avatar.name)
                    ? 'initial'
                    : 'icon'
            "
            :initialName="Boolean(avatar.imgUrl) ? null : avatar.name"
            :imgUrl="avatar.imgUrl"
            rounded
        >
        </a-avatar>

        <!-- 當有數量超過 limit 時顯視 -->
        <a-avatar
            v-if="moreLabel > 0 && moreLabel < 100"
            type="more"
            :moreLabel="moreLabel"
            rounded
        ></a-avatar>
    </div>
</template>

<style scoped>
.avatar-group {
    display: flex;
    align-items: center;
}
</style>

<!-- 
// 測試用 avatarGroup資料
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
]; -->
