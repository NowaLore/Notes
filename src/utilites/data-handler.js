const getDataFromForm = (formElement, event) => {
    event.preventDefault();
    // const formData = new FormData(formElement);
    // const objNote = {
    //     title: formData.get("title"),
    //     textarea: formData.get("textarea"),
    //     checkbox: formData.get("checkbox"),
    // }
    // 1. Прописать условие для помещения заметки в нужный массив
    // 2. Отправить данные в локалку
    // 3. Создать рендер заметок
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

// const notes = initData();

export { initData, getDataFromForm };
