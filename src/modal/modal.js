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

const modalCreator = (objectNote = {}) => {
    console.log(objectNote);

    const appContainer = document.body;
    const form = creatorElement(formParams);
    const headerForm = creatorElement(headerFormParams);

    form.append(headerForm);
    const fade = creatorElement(fadeParams);

    if (objectNote.title) {
        titleInputParams.attr.value = objectNote.title;
    }

    const titleInput = creatorElement(titleInputParams);
    const favoriteInput = creatorElement(favoriteInputParams);
    const fakeCheckbox = creatorElement(customCheckboxParams);

    headerForm.append(titleInput);

    const label = creatorElement(wrapperLabelParams);

    label.append(favoriteInput);
    label.append(fakeCheckbox);
    headerForm.append(label);

    if (objectNote.textarea) {
        console.log(objectNote.textarea);
        // Починить отображение текста в textarea при изменении заметки
        textareaParams.attr.text = objectNote.textarea;
        console.log(textareaParams);
    }

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
