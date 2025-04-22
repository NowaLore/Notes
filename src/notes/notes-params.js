const listNotesParams = {
    tagName: "ul",
    classList: [
        "listScroll",
        "max-w-4xl",
        "mx-auto",
        "max-h-[600px]",
        "overflow-y-auto",
        "pr-4",
    ],
    attr: {
        id: "listNotes",
    },
};

const itemParams = {
    tagName: "li",
    classList: [],
};

const noteParams = {
    tagName: "article",
    classList: [
        "border-2",
        "border-cyan-600",
        "rounded-xl",
        "mb-4",
        "p-2",
        "dark:border-white",
    ],
};

const topNoteParams = {
    tagName: "div",
    classList: ["flex", "justify-between", "mb-[8px]"],
};

const wrapperTitleParams = {
    tagName: "div",
    classList: ["flex", "gap-4", "items-center"],
};

const noteTitleParams = {
    tagName: "h2",
    classList: [
        "font-medium",
        "text-2xl",
        "text-cyan-600",
        "dark:text-cyan-400",
    ],
    attr: {
        "data-title": "",
    },
};

const dateParams = {
    tagName: "span",
    classList: ["text-sm", "text-stone-400", "dark:text-stone-300"],
};

const btnWrapperParams = {
    tagName: "div",
    classList: ["flex", "gap-2"],
};

const btnStatusParams = {
    tagName: "button",
    classList: [
        "w-6",
        "h-6",
        "bg-[url(./star-btn.svg)]",
        "dark:bg-[url(./star-btn_dark.svg)]",
        "bg-no-repeat",
    ],
    attr: {
        "data-status": "",
    },
};

const btnStatusGoldParams = {
    tagName: "button",
    classList: ["w-6", "h-6", "bg-[url(./star-btn_gold.svg)]", "bg-no-repeat"],
    attr: {
        "data-status": "",
    },
};

const btnEditParams = {
    tagName: "button",
    classList: [
        "w-6",
        "h-6",
        "bg-[url(./edit-btn.svg)]",
        "dark:bg-[url(./edit-btn_dark.svg)]",
        "bg-no-repeat",
    ],
    attr: {
        "data-edit": "",
    },
};

const btnDeleteParams = {
    tagName: "button",
    classList: [
        "w-6",
        "h-6",
        "bg-[url(./trash-btn.svg)]",
        "dark:bg-[url(./trash-btn_dark.svg)]",
        "bg-no-repeat",
    ],
    attr: {
        "data-del": "",
    },
};

const bottomNoteParams = {
    tagName: "p",
    classList: ["text-neutral-600", "truncate", "dark:text-neutral-400"],
    attr: {
        "data-text": "",
    },
};

export {
    listNotesParams,
    itemParams,
    noteParams,
    topNoteParams,
    bottomNoteParams,
    noteTitleParams,
    dateParams,
    btnStatusParams,
    btnStatusGoldParams,
    btnEditParams,
    btnDeleteParams,
    wrapperTitleParams,
    btnWrapperParams,
};
