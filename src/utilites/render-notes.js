import modalCreator from "../modal/modal.js";
import {
    bottomNoteParams,
    btnDeleteParams,
    btnEditParams,
    btnStatusGoldParams,
    btnStatusParams,
    btnWrapperParams,
    dateParams,
    itemParams,
    listNotesParams,
    noteParams,
    noteTitleParams,
    topNoteParams,
    wrapperTitleParams,
} from "../notes/notes-params.js";
import creatorElement from "./creator.js";
import { findNote, notes, removeNote, changeStatus } from "./data-handler.js";

const eventHandler = (event) => {
    const isRemoveBtn = event.target.closest("[data-del]");
    const isEditBtn = event.target.closest("[data-edit]");
    const isStatus = event.target.closest("[data-status]");

    if (isRemoveBtn) {
        const currID = isRemoveBtn.closest("[data-item]").id;
        removeNote(currID);
        clearRender();
        renderNotes(notes.favoriteNotes);
        renderNotes(notes.regularNotes);
    }
    if (isEditBtn) {
        const currID = isEditBtn.closest("[data-item]").id;
        modalCreator(findNote(currID));
    }
    if (isStatus) {
        const currID = isStatus.closest("[data-item]").id;
        changeStatus(findNote(currID));
    }
};

const clearRender = () => {
    document.querySelector("#listNotes").innerHTML = "";
};

const renderNotes = (arrayNotes) => {
    const appContainer = document.body;
    let listNotes = appContainer.querySelector("#listNotes");
    if (!listNotes) {
        listNotes = creatorElement(listNotesParams);
        appContainer.append(listNotes);
        listNotes.addEventListener("click", (event) => eventHandler(event));
    }

    arrayNotes.forEach((element) => {
        const item = creatorElement(itemParams);
        item.setAttribute("id", element.id);
        item.setAttribute("data-item", "");

        const article = creatorElement(noteParams);
        item.append(article);

        const top = creatorElement(topNoteParams);
        article.append(top);

        const wrapperTitle = creatorElement(wrapperTitleParams);
        top.append(wrapperTitle);

        const title = creatorElement(noteTitleParams);
        title.innerText = element.title;
        wrapperTitle.append(title);

        let isChanged = element.isChanged ? "Changed" : "Created";
        const date = creatorElement(dateParams);
        const dateString = `${isChanged} ${element.date.date} in ${element.date.time}`;
        date.innerText = dateString;

        wrapperTitle.append(date);

        const btnWrapper = creatorElement(btnWrapperParams);
        top.append(btnWrapper);

        if (element.checkbox) {
            const btnStatusGold = creatorElement(btnStatusGoldParams);
            btnWrapper.append(btnStatusGold);
        } else {
            const btnStatus = creatorElement(btnStatusParams);
            btnWrapper.append(btnStatus);
        }

        const btnEdit = creatorElement(btnEditParams);
        btnWrapper.append(btnEdit);

        const btnDel = creatorElement(btnDeleteParams);
        btnWrapper.append(btnDel);

        const bottomNote = creatorElement(bottomNoteParams);
        bottomNote.innerText = element.textarea;
        article.append(bottomNote);

        listNotes.append(item);
    });
};

export default renderNotes;
export { clearRender };
// 1. Отследить клик по списку
// 2. При клике получиьь айди заметки
// 3. Вызвать удаление из data-handler
