import creatorElement from "../utilites/creator";
import { notes } from "../utilites/data-handler";
import renderNotes, { clearRender } from "../utilites/render-notes";
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

const setActiveStyle = (element) => {
    const wrapperButtons = element.closest("[data-wrapper]");
    const activeButtons = wrapperButtons.querySelectorAll("button.active");
    activeButtons.forEach((btn) => {
        btn.classList.remove("active");
    });
    element.classList.add("active");
    console.log(element);
};

const filterHandler = (event) => {
    const isFilterBtn = event.target.closest("[data-filter]");
    if (isFilterBtn) {
        const action = isFilterBtn.dataset.filter;
        switch (action) {
            case "all":
                console.log();
                clearRender();
                renderNotes(notes.favoriteNotes);
                renderNotes(notes.regularNotes);
                setActiveStyle(isFilterBtn);
                break;
            case "favorite":
                console.log("favorite");
                clearRender();
                renderNotes(notes.favoriteNotes);
                setActiveStyle(isFilterBtn);
                break;
        }
    }
    // 1. Создать переменную для нахождения кнопки.
    // 2. Получить с кнопки значение дата атрибута
    // 3. Написать switch для диспетчеризации
};

export default filterCreator;
