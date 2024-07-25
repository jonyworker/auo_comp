<script setup>
import { ref, computed } from "vue";
import { cva } from "class-variance-authority";
import AIcon from "@/components/misc/BaseIcon.vue";
import avatarImg_01 from "@/assets/fakeImg/avatar_01.jpg";
import avatarImg_02 from "@/assets/fakeImg/avatar_02.jpg";
import avatarImg_03 from "@/assets/fakeImg/avatar_03.jpg";
import avatarImg_04 from "@/assets/fakeImg/avatar_04.jpg";

const props = defineProps({
    size: {
        type: String,
        default: "sm",
        validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    shape: {
        type: String,
        default: "default",
        validator: (value) => ["default", "circle"].includes(value),
    },
    type: {
        type: String,
        default: "image",
        validator: (value) =>
            ["image", "initial", "icon", "more"].includes(value),
    },
    imgUrl: {
        type: String,
        default: "src/assets/fakeImg/avatar_02.jpg",
    },
    moreLabel: {
        type: String,
        default: "99",
    },
    // 名字句首
    initialName: {
        type: String,
        default: "michael jackson",
    },
});

const avatarCVAClass = computed(() => {
    return cva("avatar", {
        variants: {
            size: {
                sm: "sm",
                md: "md",
                lg: "lg",
            },
            shape: {
                default: "",
                circle: "round-full",
            },
            type: {
                image: "",
                initial: "initial",
                icon: "",
                more: "more",
            },
        },
        compoundVariants: [
            {
                // color: "red",
                // type: "label",
                // class: "compoundVariants classes here",
            },
        ],
    })({
        //這裡設定 variants名稱接收 props的值
        size: props.size,
        shape: props.shape,
        type: props.type,
    });
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
    <!-- 使用者（圖片）-->
    <div :class="avatarCVAClass" v-if="type === 'image'">
        <img class="" :src="imgUrl" alt="" />
    </div>
    <!-- 更多使用者 -->
    <a
        :class="avatarCVAClass"
        v-if="type === 'more'"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        >{{ `+${props.moreLabel}` }}</a
    >
    <div :class="avatarCVAClass" v-if="type === 'initial'">
        {{ initialName(props.initialName) }}
    </div>

    <div :class="avatarCVAClass" v-if="type === 'icon'">
        <a-icon name="academi" size="18" color="#999"></a-icon>
    </div>
</template>

<style scoped>
.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    background-color: #d9d9d9;
    overflow: hidden;
}
.avatar.more {
    text-decoration: none;
    background-color: #384152;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
}
.avatar.initial {
    color: #999999;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
}

.avatar img {
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
}
.avatar-group .avatar:not(:nth-child(1)) {
    border-width: 2px;
    border-color: #fff;
    border-style: solid;
    margin-left: -8px;
}

.round-full {
    border-radius: 9999px;
}
.sm {
    width: 40px;
    height: 40px;
}
.md {
    width: 56px;
    height: 56px;
}
.lg {
    width: 72px;
    height: 72px;
}
</style>
