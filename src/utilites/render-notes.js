import {
    bottomNoteParams,
    btnDeleteParams,
    btnEditParams,
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
// Убрать создание второго списка
const renderNotes = (arrayNotes) => {
    const appContainer = document.body;
    let listNotes = appContainer.querySelector("#listNotes");
    if (!listNotes) {
        listNotes = creatorElement(listNotesParams);
        appContainer.append(listNotes);
    }

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
        wrapperTitle.append(date);

        const btnWrapper = creatorElement(btnWrapperParams);
        top.append(btnWrapper);

        const btnStatus = creatorElement(btnStatusParams);
        btnWrapper.append(btnStatus);

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
