import creatorElement from "../utilites/creator";
import inputParams from "./input-params";

const searchCreator = () => {
    const inputElement = creatorElement(inputParams);
    inputElement.addEventListener("input", (event) => search(event));
    return inputElement;
};

const search = (event) => {
    // 1. Получить значнние инпута и привести в нижний регистр+
    // 2. Найти все заметки на странице+
    // 3. Перебрать заметки
    // 4. Получить текст заголовка и текст заметки в нижнем регистре
    // 5. Написать условие для сравнения
    const searchValue = event.target.value.toLowerCase();
    const foudedNote = document.querySelectorAll("[data-item]");

    foudedNote.forEach((note) => {
        const noteText = note.querySelector("[data-text]").innerText;
        const noteTitle = note.querySelector("[data-title]").innerText;

        if (
            noteText.toLowerCase().includes(searchValue) ||
            noteTitle.toLowerCase().includes(searchValue)
        ) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
};

export default searchCreator;
