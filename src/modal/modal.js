import creatorElement from "../utilites/creator.js";
import { getDataFromForm, notes } from "../utilites/data-handler.js";
import renderNotes, { clearRender } from "../utilites/render-notes.js";
import {
    addBtnParams,
    buttonFormParams,
    cancelBtnParams,
    customCheckboxParams,
    fadeParams,
    favoriteInputParams,
    formParams,
    headerFormParams,
    textareaParams,
    titleInputParams,
    wrapperLabelParams,
} from "./modal-params.js";

const modalCreator = () => {
    const appContainer = document.body;
    const form = creatorElement(formParams);
    const headerForm = creatorElement(headerFormParams);

    form.append(headerForm);
    const fade = creatorElement(fadeParams);

    const titleInput = creatorElement(titleInputParams);
    const favoriteInput = creatorElement(favoriteInputParams);
    const fakeCheckbox = creatorElement(customCheckboxParams);

    headerForm.append(titleInput);

    const label = creatorElement(wrapperLabelParams);

    label.append(favoriteInput);
    label.append(fakeCheckbox);
    headerForm.append(label);

    const textarea = creatorElement(textareaParams);

    form.append(textarea);

    const buttonForm = creatorElement(buttonFormParams);
    const cancelBtn = creatorElement(cancelBtnParams);
    const addBtn = creatorElement(addBtnParams);

    buttonForm.append(cancelBtn);
    buttonForm.append(addBtn);
    form.append(buttonForm);
    appContainer.append(fade);
    appContainer.append(form);

    form.addEventListener("submit", (event) => {
        getDataFromForm(form, event);

        clearRender();
        renderNotes(notes.favoriteNotes);
        renderNotes(notes.regularNotes);
        removeModal(form, fade);
    });

    cancelBtn.addEventListener("click", () => removeModal(form, fade));
};

const removeModal = (modal, fade) => {
    modal.remove();
    fade.remove();
};

export default modalCreator;
