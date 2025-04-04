const getDataFromForm = (formElement, event) => {
    event.preventDefault();
    const formData = new FormData(formElement);

    const objNote = {
        title: formData.get("title"),
        textarea: formData.get("textarea"),
        checkbox: formData.get("checkbox"),
        date: "",
        id: "",
    };

    const oldID = formElement.dataset.noteid;

    if (oldID) {
        const oldNote = findNote(oldID);
        changeNote(objNote, oldNote);
        return;
    }

    objNote.id = setID(objNote.checkbox);
    objNote.date = setDate();
    setNoteToArray(objNote);
    setDataToStorage(notes);
};

const setNoteToArray = (objectNote) => {
    if (objectNote.checkbox) {
        notes.favoriteNotes.push(objectNote);
    } else {
        notes.regularNotes.push(objectNote);
    }
};

const setID = (status) => {
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

const findNote = (currentID) => {
    let currArray = null;
    if (currentID.endsWith("regular")) {
        currArray = notes.regularNotes;
    } else if (currentID.endsWith("favorite")) {
        currArray = notes.favoriteNotes;
    }
    for (let i = 0; i < currArray.length; i++) {
        if (currArray[i].id === currentID) {
            return currArray[i];
        }
    }
};

const changeNote = (newNote, oldNote) => {
    const titleChange = oldNote.title !== newNote.title;
    const textareaChange = oldNote.textarea !== newNote.textarea;
    const checkboxChange = oldNote.checkbox !== newNote.checkbox;
    if (titleChange || textareaChange || checkboxChange) {
        removeNote(oldNote.id);
        newNote.id = setID(newNote.checkbox);
        newNote.date = setDate();
        newNote.isChanged = true;
        setNoteToArray(newNote);
        setDataToStorage(notes);
    }
};

const changeStatus = (objNote) => {
    console.log(objNote);
};

const notes = initData();

export { findNote, initData, removeNote, changeStatus, getDataFromForm, notes };
