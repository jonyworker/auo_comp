import "../src/assets/css/custom.css";
import "../src/assets/css/globals.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

/** @type { import('@storybook/vue3').Preview } */
const preview = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS, //開啟更多viewport選擇
        },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            toc: {
                contentsSelector: ".sbdocs-content",
                headingSelector: "h2, h3",
                ignoreSelector: "#primary",
                // title: 'Table of Contents',
                disable: false,
                unsafeTocbotOptions: {
                    orderedList: false,
                },
            }, // 👈 Enables the table of contents
        },
        options: {
            storySort: {
                order: ["*"],
            },
        },
    },
};

export default preview;
