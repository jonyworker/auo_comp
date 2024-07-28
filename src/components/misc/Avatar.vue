<script setup>
import { ref, computed } from "vue";
import { cva } from "class-variance-authority";
import AIcon from "@/components/misc/BaseIcon.vue";
import AAvatarStatus from "@/components/misc/AvatarStatus.vue";
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
    rounded: {
        type: Boolean,
    },
    type: {
        type: String,
        default: "image",
        validator: (value) =>
            ["image", "initial", "icon", "more"].includes(value),
    },
    status: {
        type: String,
        validator: (value) =>
            ["online", "busy", "away", "offline"].includes(value),
    },
    "status-position": {
        type: String,
        default: "tl",
        validator: (value) => ["tl", "tr", "bl", "br"].includes(value),
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
            rounded: {
                true: "round-full",
            },
            type: {
                image: "",
                initial: "initial",
                icon: "",
                more: "more",
            },
        },
    })({
        size: props.size,
        type: props.type,
        rounded: props.rounded,
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
    <div class="avatar-container" v-if="type === 'image'">
        <div :class="avatarCVAClass">
            <img :src="imgUrl" alt="" />
        </div>
        <a-avatarStatus
            v-if="props.status"
            :position="props.statusPosition"
            :status="props.status"
            :rounded="props.rounded"
        ></a-avatarStatus>
    </div>

    <!-- 使用者頭文字 -->
    <div class="avatar-container" v-if="type === 'initial'">
        <div :class="avatarCVAClass">
            {{ initialName(props.initialName) }}
        </div>
        <a-avatarStatus
            v-if="props.status"
            :position="props.statusPosition"
            :status="props.status"
            :rounded="props.rounded"
        ></a-avatarStatus>
    </div>

    <!-- icon -->
    <div class="avatar-container" v-if="type === 'icon'">
        <div :class="avatarCVAClass">
            <a-icon name="academi" size="18" color="#999"></a-icon>
        </div>
        <a-avatarStatus
            v-if="props.status"
            :position="props.statusPosition"
            :status="props.status"
            :rounded="props.rounded"
        ></a-avatarStatus>
    </div>

    <!-- 查看更多使用者 -->
    <div class="avatar-container">
        <a
            :class="avatarCVAClass"
            v-if="type === 'more'"
            href="#"
            target="_blank"
            rel=""
            >{{ `+${props.moreLabel}` }}</a
        >
    </div>
</template>

<style scoped>
.avatar-container {
    position: relative;
    width: fit-content;
}
.avatar-group .avatar-container:not(:nth-child(1)) {
    margin-left: -8px;
}
.avatar-group .avatar-container:not(:nth-child(1)) .avatar {
    border-width: 2px;
    border-color: #fff;
    border-style: solid;
}

.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    background-color: #d9d9d9;
    overflow: hidden;
    position: relative;
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
