import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Example/Button",
    component: Button,
    // tags: ["autodocs"],
    argTypes: {
        /**
         * Color of the button.
         */
        themeColor: {
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "tertiary",
                "success",
                "warning",
                "error",
                "info",
            ],
        },
        type: {
            control: { type: "select" },
            options: ["filled", "outline", "text", "icon"],
            description: "Overwritten description",
        },
        size: {
            control: { type: "select" },
            options: ["xs", "sm", "base", "lg", "xl"],
        },
        borderRound: {
            control: { type: "select" },
            options: ["none", "base", "md", "lg", "pill"],
        },
        btnWidth: {
            control: { type: "radio" },
            options: ["fit", "full"],
        },
        icon: {
            control: { type: "text" },
        },
        prependIcon: {
            control: { type: "text" },
            description: "Overwritten description",
        },
        appendIcon: {
            control: { type: "text" },
        },
    },
    parameters: {
        docs: {
            controls: { exclude: ["style"] },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

export const ButtonDefault = {
    // args: {
    //     intent: "primary",
    //     borderRound: "base",
    //     btnType: "filled",
    //     size: "base",
    // },
    //控制各個stroys能夠顯示controls的量
    // parameters: {
    //   controls: { include: ['intent', 'borderRound', 'btnType', 'size'] },
    // },
};
