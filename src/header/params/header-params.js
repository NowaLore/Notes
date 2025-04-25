const headerParams = {
    tagName: "header",
    classList: [
        "border-cyan-600",
        "border-solid",
        "border-b-2",
        "py-2.5",
        "flex",
        "justify-between",
        "items-center",
        "mx-auto",
        "max-w-[1024px]",
        "px-[15px]",
        "dark:border-white",
    ],
};

const titleParams = {
    tagName: "h1",
    classList: [
        "text-xl",
        "font-medium",
        "font-[Roboto_Slab]",
        "text-cyan-600",
        "dark:text-cyan-400",
        "xs:text-3xl",
    ],
    text: "To-Do",
};

const nightmodeButtonParams = {
    tagName: "button",
    classList: [
        "night-button",
        "h-10",
        "w-10",
        "rounded-full",
        "bg-no-repeat",
        "bg-center",
        "bg-cyan-600",
        "dark:bg-white",
        "flex",
        "justify-center",
        "items-center",
        "bg-[url(./sun-icon.svg)]",
        "bg-[70%]",
        "bg-no-repeat",
        "dark:bg-[url(./sun-icon-dark.svg)]",
    ],
    attr: {
        id: "nightBtn",
    },
};

const iconWrapperParams = {
    tagName: "span",
    classList: ["icon-wrapper", "block", "h-8", "w-8", "rounded-full"],
};

const wrapperHeaderParams = {
    tagName: "div",
    classList: ["flex", "gap-4", "items-center"],
};

export {
    headerParams,
    titleParams,
    nightmodeButtonParams,
    iconWrapperParams,
    wrapperHeaderParams,
};
