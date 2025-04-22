const filterWrapperParams = {
    tagName: "div",
    classList: ["flex", "justify-center", "gap-4", "pt-6"],
    attr: {
        "data-wrapper": "",
    },
};

const allNotesBtnParams = {
    tagName: "button",
    classList: [
        "px-16",
        "py-2",
        "bg-cyan-600",
        "rounded-lg",
        "text-white",
        "text-xl",
        "font-medium",
        "dark:bg-white",
        "dark:text-cyan-600",
        "button-choice",
    ],
    text: "All Notes",
    attr: {
        "data-filter": "all",
    },
};

const favNotesBtnParams = {
    tagName: "button",
    classList: [
        "px-16",
        "py-2",
        "bg-cyan-600",
        "rounded-lg",
        "text-white",
        "text-xl",
        "font-medium",
        "dark:bg-white",
        "dark:text-cyan-600",
        "button-choice",
    ],
    text: "Favorites",
    attr: {
        "data-filter": "favorite",
    },
};

export { filterWrapperParams, allNotesBtnParams, favNotesBtnParams };
