<script setup>
import { ref, computed } from "vue";
import { cva } from "class-variance-authority";

const props = defineProps({
    status: {
        type: String,
        validator: (value) =>
            ["online", "busy", "away", "offline"].includes(value),
    },
    rounded: Boolean,
    position: {
        type: String,
        validator: (value) => ["tl", "tr", "br", "bl"].includes(value),
    },
});

const avatarStatusCVAClass = computed(() => {
    return cva("avatar-status", {
        variants: {
            status: {
                online: "status-online",
                busy: "status-busy",
                away: "status-away",
                offline: "status-offline",
            },
        },
        compoundVariants: [
            // status position(tl, tr, br, bl), rounded: false
            {
                position: "tl",
                rounded: false,
                class: "status-position-tl",
            },
            {
                position: "tr",
                rounded: false,
                class: "status-position-tr",
            },
            {
                position: "br",
                rounded: false,
                class: "status-position-br",
            },
            {
                position: "bl",
                rounded: false,
                class: "status-position-bl",
            },

            // status position(tl, tr, br, bl), rounded: true
            {
                position: "tl",
                rounded: true,
                class: "status-position-tl-rounded",
            },
            {
                position: "tr",
                rounded: true,
                class: "status-position-tr-rounded",
            },
            {
                position: "br",
                rounded: true,
                class: "status-position-br-rounded",
            },
            {
                position: "bl",
                rounded: true,
                class: "status-position-bl-rounded",
            },
        ],
    })({
        //這裡設定 variants名稱接收 props的值
        status: props.status,
        rounded: props.rounded,
        position: props.position,
    });
});
</script>

<template>
    <span :class="avatarStatusCVAClass"></span>
</template>

<style scoped>
.avatar-container .avatar-status {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 9999px;
    border: 2px solid #1f2937;
    /* box-sizing: border-box; */
}
.avatar-status.status-position-tl {
    top: -6px;
    left: -6px;
}
.avatar-status.status-position-tr {
    top: -6px;
    right: -6px;
}
.avatar-status.status-position-br {
    bottom: -6px;
    right: -6px;
}
.avatar-status.status-position-bl {
    bottom: -6px;
    left: -6px;
}
.avatar-status.status-position-tl-rounded {
    top: 0;
    left: 0;
}
.avatar-status.status-position-tr-rounded {
    top: 0;
    right: 0;
}
.avatar-status.status-position-br-rounded {
    bottom: 0;
    right: 0;
}
.avatar-status.status-position-bl-rounded {
    bottom: 0;
    left: 0;
}
.avatar-status.status-online {
    /* green */
    background-color: #31c48d;
}
.avatar-status.status-busy {
    /* yellow */
    background-color: #e3a008;
}
.avatar-status.status-away {
    /* gray */
    background-color: #9ca3af;
}
.avatar-status.status-offline {
    /* red */
    background-color: #f98080;
}
</style>
