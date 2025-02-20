const getDataFromForm = (formElement, event) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const objNote = {
        title: formData.get("title"),
        textarea: formData.get("textarea"),
        checkbox: formData.get("checkbox"),
        date: setDate(),
    };
    if (objNote.checkbox) {
        notes.favoriteNotes.push(objNote);
    } else {
        notes.regularNotes.push(objNote);
    }

    setDataToStorage(notes);
};

const setDate = () => {
    const currentDate = new Date();
    const neededDate = {
        time: currentDate.toLocaleTimeString("ru", {
            hour: "2-digit",
            minute: "2-digit",
        }),
        date: currentDate.toLocaleDateString("ru", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        }),
    };
    return neededDate;
};

const setDataToStorage = (data) => {
    const key = "notes";
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
};

const getDataFromStorage = () => {
    const key = "notes";
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

const initData = () => {
    let dataStructure = getDataFromStorage();

    if (!dataStructure) {
        dataStructure = {
            regularNotes: [],
            favoriteNotes: [],
        };
    }

    setDataToStorage(dataStructure);

    return dataStructure;
};

const notes = initData();

export { initData, getDataFromForm, notes };
