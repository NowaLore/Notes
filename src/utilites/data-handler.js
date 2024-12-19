const setDataToStorage = (data) => {
    const key = "notes";
    localStorage.setItem(key, data);
};

const getDataFromStorage = () => {
    const key = "notes";
    const data = localStorage.getItem(key);
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
console.log(notes);

export default initData;

// 1. Создать функцию initData
// 1.1 Сделать запрос в локальное хранилище
// 1.2 Создать функцию для создания базовой структуры
