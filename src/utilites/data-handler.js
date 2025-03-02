const getDataFromForm = (formElement, event) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const isFavorite = formData.get("checkbox");
    const objNote = {
        title: formData.get("title"),
        textarea: formData.get("textarea"),
        checkbox: formData.get("checkbox"),
        date: setDate(),
        id: setID(isFavorite),
    };
    if (objNote.checkbox) {
        notes.favoriteNotes.push(objNote);
    } else {
        notes.regularNotes.push(objNote);
    }

    setDataToStorage(notes);
};

const setID = (status) => {
    console.log(status);
    let newID = null;
    if (status) {
        newID = `${notes.favoriteNotes.length}favorite`;
    } else {
        newID = `${notes.regularNotes.length}regular`;
    }
    return newID;
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

const removeNote = (currentID) => {
    let currArray = null;
    if (currentID.endsWith("regular")) {
        currArray = notes.regularNotes;
    } else if (currentID.endsWith("favorite")) {
        currArray = notes.favoriteNotes;
    }

    const currIndex = currArray.findIndex((note) => note.id === currentID);
    currArray.splice(currIndex, 1);
    setDataToStorage(notes);
};

const notes = initData();

export { initData, removeNote, getDataFromForm, notes };
// 1. Написать функцию удаления
// 2. Функция принимает айди
//
