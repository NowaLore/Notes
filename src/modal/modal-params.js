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
    ],
};

const customCheckboxParams = {
    tagName: "span",
    classList: ["custom-checkbox"],
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
    ],
};

const buttonFormParams = {
    tagName: "div",
    classList: [],
};

const cancelBtnParams = {
    tagName: "button",
    classList: [],
};

const addBtnParams = {
    tagName: "button",
    classList: [],
};

const fadeParams = {
    tagName: "div",
    classList: [],
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
