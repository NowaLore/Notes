import modalCreator from "../modal/modal.js";
import creatorElement from "../utilites/creator.js";
import {
    addNoteIconParams,
    addNoteParams,
    addNoteTextParams,
    wrapperControlParams,
} from "./btn-control-params.js";

const btnCreator = () => {
    const wrapperControl = creatorElement(wrapperControlParams);
    const addNote = creatorElement(addNoteParams);
    const addNoteText = creatorElement(addNoteTextParams);
    const addNoteIcon = creatorElement(addNoteIconParams);

    addNote.addEventListener("click", modalCreator);

    addNote.append(addNoteText);
    addNote.append(addNoteIcon);
    wrapperControl.append(addNote);

    return wrapperControl;
};

export default btnCreator;
