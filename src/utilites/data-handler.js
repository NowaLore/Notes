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
    let statusNote = "";
    if (currentID.endsWith("regular")) {
        currArray = notes.regularNotes;
        statusNote = "regular";
    } else if (currentID.endsWith("favorite")) {
        currArray = notes.favoriteNotes;
        statusNote = "favorite";
    }

    const currIndex = currArray.findIndex((note) => note.id === currentID);
    currArray.splice(currIndex, 1);
    decreaseID(currIndex, currArray, statusNote);
    setDataToStorage(notes);
};

const decreaseID = (currIndex, currArray, statusNote) => {
    for (let i = currIndex; i < currArray.length; i++) {
        const currID = parseInt(currArray[i].id);
        const updID = currID - 1;
        currArray[i].id = updID + statusNote;
    }
};

const notes = initData();

export { initData, removeNote, getDataFromForm, notes };
