const formParams = {
    tagName: "form",
    classList: [
        "py-9",
        "px-7",
        "max-w-[915px]",
        "w-full",
        "bg-white",
        "rounded-xl",
        "fixed",
        "bottom-1/2",
        "right-1/2",
        "translate-x-1/2",
        "translate-y-1/2",
        "dark:bg-[#2f353b]",
    ],
};

const headerFormParams = {
    tagName: "div",
    classList: [
        "border-cyan-600",
        "border-solid",
        "border-b-2",
        "max-w-[362px]",
        "flex",
        "gap-2",
        "mb-[10px]",
    ],
};

const titleInputParams = {
    tagName: "input",
    classList: [
        "text-2xl",
        "font-medium",
        "outline-none",
        "max-w-[330px]",
        "w-full",
        "dark:text-white",
    ],
    attr: {
        name: "title",
    },
};

const customCheckboxParams = {
    tagName: "span",
    classList: [
        "custom-checkbox",
        "w-8",
        "h-8",
        "bg-no-repeat",
        "bg-size-cover",
        "bg-[url(./star-btn.svg)]",
        "dark:bg-[url(./star-btn_dark.svg)]",
        "block",
    ],
};

const wrapperLabelParams = {
    tagName: "label",
    classList: [],
};

const favoriteInputParams = {
    tagName: "input",
    classList: ["real-checkbox"],
    attr: {
        type: "checkbox",
        name: "checkbox",
    },
};

const textareaParams = {
    tagName: "textarea",
    classList: [
        "scrollbar",
        "w-full",
        "min-h-[200px]",
        "max-h-[450px]",
        "outline-none",
        "focus:shadow-lg",
        "mb-4",
        "dark:text-white",
    ],
    attr: { name: "textarea" },
};

const buttonFormParams = {
    tagName: "div",
    classList: ["flex", "gap-4", "justify-end"],
};

const cancelBtnParams = {
    tagName: "button",
    classList: [
        "py-2",
        "px-4",
        "min-w-[107px]",
        "bg-rose-800",
        "rounded-xl",
        "text-white",
        "text-xl",
        "font-medium",
    ],
    text: "Cancel",
};

const addBtnParams = {
    tagName: "button",
    classList: [
        "py-2",
        "px-4",
        "min-w-[107px]",
        "bg-cyan-600",
        "rounded-xl",
        "text-white",
        "text-xl",
        "font-medium",
    ],
    text: "Add",
};

const fadeParams = {
    tagName: "div",
    classList: [
        "w-full",
        "h-screen",
        "bg-[#e0e0e0bc]",
        "dark:bg-[#15576bdc]",
        "backdrop-blur-sm",
        "fixed",
        "left-0",
        "top-0",
    ],
};

export {
    formParams,
    headerFormParams,
    titleInputParams,
    favoriteInputParams,
    textareaParams,
    buttonFormParams,
    cancelBtnParams,
    addBtnParams,
    fadeParams,
    customCheckboxParams,
    wrapperLabelParams,
};
