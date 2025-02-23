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

const eventHandler = (event) => {
    console.log(event);
};

const clearRender = (element) => {
    element.innerHTML = "";
};

const renderNotes = (arrayNotes) => {
    const appContainer = document.body;
    let listNotes = appContainer.querySelector("#listNotes");
    if (!listNotes) {
        listNotes = creatorElement(listNotesParams);
        appContainer.append(listNotes);
        listNotes.addEventListener("click", (event) => eventHandler(event));
    }

    clearRender(listNotes);

    arrayNotes.forEach((element) => {
        const item = creatorElement(itemParams);

        const article = creatorElement(noteParams);
        item.append(article);

        const top = creatorElement(topNoteParams);
        article.append(top);

        const wrapperTitle = creatorElement(wrapperTitleParams);
        top.append(wrapperTitle);

        const title = creatorElement(noteTitleParams);
        title.innerText = element.title;
        wrapperTitle.append(title);

        const date = creatorElement(dateParams);
        const dateString = `Created ${element.date.date} in ${element.date.time}`;
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
// 1. Отследить клик по списку
// 2. При клике получиьь айди заметки
// 3. Вызвать удаление из data-handler
