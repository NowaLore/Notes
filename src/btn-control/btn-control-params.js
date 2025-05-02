const addNoteParams = {
    tagName: "button",
    classList: ["flex", "items-center", "gap-2", "mx-auto", "mt-10", "mb-8"],
};

const addNoteTextParams = {
    tagName: "span",
    text: "Add Note",
    classList: [
        "text-2xl",
        "font-medium",
        "text-cyan-600",
        "dark:text-cyan-400",
    ],
};

const addNoteIconParams = {
    tagName: "span",
    classList: [
        "icon-addnote",
        "block",
        "w-10",
        "h-10",
        "bg-[url(/btn-add-note__icon.svg)]",
        "dark:bg-[url(/btn-add-note__icon-dark.svg)]",
        "bg-no-repeat",
    ],
};

const wrapperControlParams = {
    tagName: "div",
    classList: [],
};

export {
    addNoteParams,
    addNoteTextParams,
    addNoteIconParams,
    wrapperControlParams,
};
