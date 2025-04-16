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
    return wrapperNotes;
};

export default filterCreator;
