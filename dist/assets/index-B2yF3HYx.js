(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const creatorElement = (paramsElement) => {
  const element = document.createElement(paramsElement.tagName);
  element.classList.add(...paramsElement.classList);
  if (paramsElement.text) {
    element.innerText = paramsElement.text;
  }
  if (paramsElement.attr) {
    for (const key in paramsElement.attr) {
      element.setAttribute(key, paramsElement.attr[key]);
    }
  }
  return element;
};
const getDataFromForm = (formElement, event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const objNote = {
    title: formData.get("title"),
    textarea: formData.get("textarea"),
    checkbox: formData.get("checkbox"),
    date: "",
    id: ""
  };
  const oldID = formElement.dataset.noteid;
  if (oldID) {
    const oldNote = findNote(oldID);
    changeNote(objNote, oldNote);
    return;
  }
  objNote.id = setID(objNote.checkbox);
  objNote.date = setDate();
  setNoteToArray(objNote);
  setDataToStorage(notes);
};
const setNoteToArray = (objectNote) => {
  if (objectNote.checkbox) {
    notes.favoriteNotes.push(objectNote);
  } else {
    notes.regularNotes.push(objectNote);
  }
};
const setID = (status) => {
  let newID = null;
  if (status) {
    newID = `${notes.favoriteNotes.length}favorite`;
  } else {
    newID = `${notes.regularNotes.length}regular`;
  }
  return newID;
};
const setDate = () => {
  const currentDate = /* @__PURE__ */ new Date();
  const neededDate = {
    time: currentDate.toLocaleTimeString("ru", {
      hour: "2-digit",
      minute: "2-digit"
    }),
    date: currentDate.toLocaleDateString("ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    })
  };
  return neededDate;
};
const setDataToStorage = (data) => {
  const key = "notes";
  const dataString = JSON.stringify(data);
  localStorage.setItem(key, dataString);
};
const getDataFromStorage = () => {
  const key = "notes";
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};
const initData = () => {
  let dataStructure = getDataFromStorage();
  if (!dataStructure) {
    dataStructure = {
      regularNotes: [],
      favoriteNotes: []
    };
  }
  setDataToStorage(dataStructure);
  return dataStructure;
};
const removeNote = (currentID) => {
  let currArray = null;
  let statusNote = "";
  if (currentID.endsWith("regular")) {
    currArray = notes.regularNotes;
    statusNote = "regular";
  } else if (currentID.endsWith("favorite")) {
    currArray = notes.favoriteNotes;
    statusNote = "favorite";
  }
  const currIndex = currArray.findIndex((note) => note.id === currentID);
  currArray.splice(currIndex, 1);
  decreaseID(currIndex, currArray, statusNote);
  setDataToStorage(notes);
};
const decreaseID = (currIndex, currArray, statusNote) => {
  for (let i = currIndex; i < currArray.length; i++) {
    const currID = parseInt(currArray[i].id);
    const updID = currID - 1;
    currArray[i].id = updID + statusNote;
  }
};
const findNote = (currentID) => {
  let currArray = null;
  if (currentID.endsWith("regular")) {
    currArray = notes.regularNotes;
  } else if (currentID.endsWith("favorite")) {
    currArray = notes.favoriteNotes;
  }
  for (let i = 0; i < currArray.length; i++) {
    if (currArray[i].id === currentID) {
      return currArray[i];
    }
  }
};
const changeNote = (newNote, oldNote) => {
  const titleChange = oldNote.title !== newNote.title;
  const textareaChange = oldNote.textarea !== newNote.textarea;
  const checkboxChange = oldNote.checkbox !== newNote.checkbox;
  if (titleChange || textareaChange || checkboxChange) {
    removeNote(oldNote.id);
    newNote.id = setID(newNote.checkbox);
    newNote.date = setDate();
    newNote.isChanged = true;
    setNoteToArray(newNote);
    setDataToStorage(notes);
  }
};
const changeStatus = (objNote) => {
  objNote.checkbox ? objNote.checkbox = null : objNote.checkbox = "on";
  removeNote(objNote.id);
  objNote.isChanged = true;
  objNote.id = setID(objNote.checkbox);
  objNote.date = setDate();
  setNoteToArray(objNote);
  setDataToStorage(notes);
};
const notes = initData();
const listNotesParams = {
  tagName: "ul",
  classList: [
    "listScroll",
    "max-w-4xl",
    "mx-auto",
    "max-h-[600px]",
    "overflow-y-auto",
    "pr-4",
    "w-[96%]"
  ],
  attr: {
    id: "listNotes"
  }
};
const itemParams = {
  tagName: "li",
  classList: []
};
const noteParams = {
  tagName: "article",
  classList: [
    "border-2",
    "border-cyan-600",
    "rounded-xl",
    "mb-4",
    "p-2",
    "dark:border-white"
  ]
};
const topNoteParams = {
  tagName: "div",
  classList: ["flex", "justify-between", "mb-[8px]", "flex-wrap"]
};
const wrapperDateAndBtnsParams = {
  tagName: "div",
  classList: [
    "flex",
    "xs:gap-4",
    "justify-between",
    "items-center",
    "flex-wrap",
    "w-full",
    "xs:w-[285px]"
  ]
};
const noteTitleParams = {
  tagName: "h2",
  classList: [
    "font-medium",
    "text-2xl",
    "text-cyan-600",
    "dark:text-cyan-400",
    "overflow-hidden",
    "text-ellipsis",
    "truncate",
    "w-[200px]"
  ],
  attr: {
    "data-title": ""
  }
};
const dateParams = {
  tagName: "span",
  classList: [
    "text-sm",
    "text-stone-400",
    "dark:text-stone-300",
    "min-w-[180px]"
  ]
};
const btnWrapperParams = {
  tagName: "div",
  classList: ["flex", "gap-2"]
};
const btnStatusParams = {
  tagName: "button",
  classList: [
    "w-6",
    "h-6",
    "bg-[url(/star-btn.svg)]",
    "dark:bg-[url(/star-btn_dark.svg)]",
    "bg-no-repeat"
  ],
  attr: {
    "data-status": ""
  }
};
const btnStatusGoldParams = {
  tagName: "button",
  classList: ["w-6", "h-6", "bg-[url(/star-btn_gold.svg)]", "bg-no-repeat"],
  attr: {
    "data-status": ""
  }
};
const btnEditParams = {
  tagName: "button",
  classList: [
    "w-6",
    "h-6",
    "bg-[url(./edit-btn.svg)]",
    "dark:bg-[url(/edit-btn_dark.svg)]",
    "bg-no-repeat"
  ],
  attr: {
    "data-edit": ""
  }
};
const btnDeleteParams = {
  tagName: "button",
  classList: [
    "w-6",
    "h-6",
    "bg-[url(/trash-btn.svg)]",
    "dark:bg-[url(/trash-btn_dark.svg)]",
    "bg-no-repeat"
  ],
  attr: {
    "data-del": ""
  }
};
const bottomNoteParams = {
  tagName: "p",
  classList: [
    "text-neutral-600",
    "truncate",
    "dark:text-neutral-400",
    "overflow-hidden",
    "text-ellipsis"
  ],
  attr: {
    "data-text": ""
  }
};
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
    clearRender();
    renderNotes(notes.favoriteNotes);
    renderNotes(notes.regularNotes);
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
    const title = creatorElement(noteTitleParams);
    title.innerText = element.title;
    top.append(title);
    const wrapperDateAndBtns = creatorElement(wrapperDateAndBtnsParams);
    top.append(wrapperDateAndBtns);
    let isChanged = element.isChanged ? "Changed" : "Created";
    const date = creatorElement(dateParams);
    const dateString = `${isChanged} ${element.date.date} in ${element.date.time}`;
    date.innerText = dateString;
    wrapperDateAndBtns.append(date);
    const btnWrapper = creatorElement(btnWrapperParams);
    wrapperDateAndBtns.append(btnWrapper);
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
const formParams = {
  tagName: "form",
  classList: [
    "py-9",
    "px-7",
    "max-w-[915px]",
    "w-[96%]",
    "bg-white",
    "rounded-xl",
    "fixed",
    "bottom-1/2",
    "right-1/2",
    "translate-x-1/2",
    "translate-y-1/2",
    "dark:bg-[#2f353b]"
  ]
};
const headerFormParams = {
  tagName: "div",
  classList: [
    "border-cyan-600",
    "border-solid",
    "border-b-2",
    "max-w-[362px]",
    "flex",
    "gap-2",
    "mb-[10px]"
  ]
};
const titleInputParams = {
  tagName: "input",
  classList: [
    "text-2xl",
    "font-medium",
    "outline-none",
    "max-w-[330px]",
    "w-full",
    "dark:text-white"
  ],
  attr: {
    name: "title"
  }
};
const customCheckboxParams = {
  tagName: "span",
  classList: [
    "custom-checkbox",
    "w-8",
    "h-8",
    "bg-no-repeat",
    "bg-size-cover",
    "bg-[url(/star-btn.svg)]",
    "dark:bg-[url(/star-btn_dark.svg)]",
    "block"
  ]
};
const wrapperLabelParams = {
  tagName: "label",
  classList: []
};
const favoriteInputParams = {
  tagName: "input",
  classList: ["real-checkbox"],
  attr: {
    type: "checkbox",
    name: "checkbox"
  }
};
const textareaParams = {
  tagName: "textarea",
  classList: [
    "scrollbar",
    "w-full",
    "min-h-[200px]",
    "max-h-[450px]",
    "outline-none",
    "focus:shadow-lg",
    "mb-4",
    "dark:text-white"
  ],
  attr: { name: "textarea" }
};
const buttonFormParams = {
  tagName: "div",
  classList: ["flex", "gap-4", "justify-end"]
};
const cancelBtnParams = {
  tagName: "button",
  classList: [
    "py-2",
    "px-4",
    "min-w-[107px]",
    "bg-rose-800",
    "rounded-xl",
    "text-white",
    "text-xl",
    "font-medium"
  ],
  text: "Cancel"
};
const addBtnParams = {
  tagName: "button",
  classList: [
    "py-2",
    "px-4",
    "min-w-[107px]",
    "bg-cyan-600",
    "rounded-xl",
    "text-white",
    "text-xl",
    "font-medium"
  ],
  text: "Add"
};
const fadeParams = {
  tagName: "div",
  classList: [
    "w-full",
    "h-screen",
    "bg-[#e0e0e0bc]",
    "dark:bg-[#15576bdc]",
    "backdrop-blur-sm",
    "fixed",
    "left-0",
    "top-0"
  ]
};
const modalCreator = (objectNote = {}) => {
  const appContainer = document.body;
  const form = creatorElement(formParams);
  if (objectNote.id) {
    form.setAttribute("data-noteid", objectNote.id);
  }
  const headerForm = creatorElement(headerFormParams);
  form.append(headerForm);
  const fade = creatorElement(fadeParams);
  if (objectNote.title) {
    titleInputParams.attr.value = objectNote.title;
  } else {
    titleInputParams.attr.value = "";
  }
  const isFavorite = objectNote.checkbox;
  if (isFavorite) {
    favoriteInputParams.attr.checked = "checked";
  } else {
    delete favoriteInputParams.attr.checked;
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
    textareaParams.text = objectNote.textarea;
  } else {
    textareaParams.text = "";
  }
  const textarea = creatorElement(textareaParams);
  form.append(textarea);
  const buttonForm = creatorElement(buttonFormParams);
  const cancelBtn = creatorElement(cancelBtnParams);
  if (Object.keys(objectNote).length > 0 && !(objectNote instanceof Event)) {
    addBtnParams.text = "Edit";
  } else {
    addBtnParams.text = "Add";
  }
  console.log(objectNote);
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
const addNoteParams = {
  tagName: "button",
  classList: ["flex", "items-center", "gap-2", "mx-auto", "mt-10", "mb-8"]
};
const addNoteTextParams = {
  tagName: "span",
  text: "Add Note",
  classList: [
    "text-2xl",
    "font-medium",
    "text-cyan-600",
    "dark:text-cyan-400"
  ]
};
const addNoteIconParams = {
  tagName: "span",
  classList: [
    "icon-addnote",
    "block",
    "w-10",
    "h-10",
    "bg-[url(/btn-add-note__icon.svg)]",
    "dark:bg-[url(/btn-add-note__icon-dark.svg)]",
    "bg-no-repeat"
  ]
};
const wrapperControlParams = {
  tagName: "div",
  classList: []
};
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
const filterWrapperParams = {
  tagName: "div",
  classList: ["flex", "justify-center", "gap-4", "pt-6"],
  attr: {
    "data-wrapper": ""
  }
};
const allNotesBtnParams = {
  tagName: "button",
  classList: [
    "px-6",
    "py-2",
    "bg-cyan-600",
    "rounded-lg",
    "text-white",
    "text-xl",
    "font-medium",
    "dark:bg-white",
    "dark:text-cyan-600",
    "button-choice",
    "xs:px-16"
  ],
  text: "All Notes",
  attr: {
    "data-filter": "all"
  }
};
const favNotesBtnParams = {
  tagName: "button",
  classList: [
    "px-6",
    "py-2",
    "bg-cyan-600",
    "rounded-lg",
    "text-white",
    "text-xl",
    "font-medium",
    "dark:bg-white",
    "dark:text-cyan-600",
    "button-choice",
    "xs:px-16"
  ],
  text: "Favorites",
  attr: {
    "data-filter": "favorite"
  }
};
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
};
const headerParams = {
  tagName: "header",
  classList: [
    "border-cyan-600",
    "border-solid",
    "border-b-2",
    "py-2.5",
    "flex",
    "justify-between",
    "items-center",
    "mx-auto",
    "max-w-[1024px]",
    "px-[15px]",
    "dark:border-white"
  ]
};
const titleParams = {
  tagName: "h1",
  classList: [
    "text-xl",
    "font-medium",
    "font-[Roboto_Slab]",
    "text-cyan-600",
    "dark:text-cyan-400",
    "xs:text-3xl"
  ],
  text: "To-Do"
};
const nightmodeButtonParams = {
  tagName: "button",
  classList: [
    "night-button",
    "h-10",
    "w-10",
    "rounded-full",
    "bg-no-repeat",
    "bg-center",
    "bg-cyan-600",
    "dark:bg-white",
    "flex",
    "justify-center",
    "items-center",
    "bg-[url(/sun-icon.svg)]",
    "bg-[70%]",
    "bg-no-repeat",
    "dark:bg-[url(/sun-icon-dark.svg)]"
  ],
  attr: {
    id: "nightBtn"
  }
};
const iconWrapperParams = {
  tagName: "span",
  classList: ["icon-wrapper", "block", "h-8", "w-8", "rounded-full"]
};
const wrapperHeaderParams = {
  tagName: "div",
  classList: ["flex", "gap-4", "items-center"]
};
const inputParams = {
  tagName: "input",
  classList: [
    "border-2",
    "border-cyan-600",
    "rounded-lg",
    "px-2",
    "dark:border-white",
    "outline-none",
    "dark:text-white"
  ],
  attr: {
    placeholder: "Search..."
  }
};
const searchCreator = () => {
  const inputElement = creatorElement(inputParams);
  inputElement.addEventListener("input", (event) => search(event));
  return inputElement;
};
const search = (event) => {
  const searchValue = event.target.value.toLowerCase();
  const foudedNote = document.querySelectorAll("[data-item]");
  foudedNote.forEach((note) => {
    const noteText = note.querySelector("[data-text]").innerText;
    const noteTitle = note.querySelector("[data-title]").innerText;
    if (noteText.toLowerCase().includes(searchValue) || noteTitle.toLowerCase().includes(searchValue)) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
};
const headerCreator = () => {
  const header = creatorElement(headerParams);
  const title = creatorElement(titleParams);
  const nightmodeBtn = creatorElement(nightmodeButtonParams);
  const iconWrapper = creatorElement(iconWrapperParams);
  const input = searchCreator();
  const wrapperHeader = creatorElement(wrapperHeaderParams);
  header.append(title);
  header.append(wrapperHeader);
  wrapperHeader.append(input);
  wrapperHeader.append(nightmodeBtn);
  nightmodeBtn.append(iconWrapper);
  return header;
};
const init = () => {
  initData();
  const appContainer = document.body;
  const headerElement = headerCreator();
  const filter = filterCreator();
  const wrapperControl = btnCreator();
  const darkModeBtn = headerElement.querySelector("#nightBtn");
  darkModeBtn.addEventListener("click", () => {
    appContainer.classList.toggle("dark");
  });
  appContainer.append(headerElement);
  appContainer.append(filter);
  appContainer.append(wrapperControl);
  renderNotes(notes.favoriteNotes);
  renderNotes(notes.regularNotes);
};
init();
//# sourceMappingURL=index-B2yF3HYx.js.map
