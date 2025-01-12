import { listNotesParams } from "../notes/notes-params.js";
import creatorElement from "./creator.js";
// Убрать создание второго списка
const renderNotes = (arrayNotes) => {
    const appContainer = document.body;
    console.log(appContainer);
    let listNotes = appContainer.querySelector("#listNotes");
    if (!listNotes) {
        listNotes = creatorElement(listNotesParams);

        appContainer.append(listNotes);
    } else {
        console.log(arrayNotes);
    }
};

export default renderNotes;
