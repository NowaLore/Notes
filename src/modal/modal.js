import creatorElement from "../utilites/creator.js";
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
};

export default modalCreator;
