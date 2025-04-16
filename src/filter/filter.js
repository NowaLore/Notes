import creatorElement from "../utilites/creator";
import {
    allNotesBtnParams,
    favNotesBtnParams,
    filterWrapperParams,
} from "./filter-params";

const filterCreator = () => {
    const wrapperNotes = creatorElement(filterWrapperParams);
    const allNotesBtn = creatorElement(allNotesBtnParams);
    const favNotesBtn = creatorElement(favNotesBtnParams);

    wrapperNotes.append(allNotesBtn, favNotesBtn);
    wrapperNotes.addEventListener("click", (event) => filterHandler(event));
    return wrapperNotes;
};

const filterHandler = (event) => {
    const isFilterBtn = event.target.closest("[data-filter]");
    if (isFilterBtn) {
        const action = isFilterBtn.dataset.filter;
        switch (action) {
            case "all":
                console.log("all");

                break;
            case "favorite":
                console.log("favorite");

                break;
        }
    }
    // 1. Создать переменную для нахождения кнопки.
    // 2. Получить с кнопки значение дата атрибута
    // 3. Написать switch для диспетчеризации
};

export default filterCreator;
