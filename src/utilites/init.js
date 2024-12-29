import btnCreator from "../btn-control/btn-control-view.js";
import headerCreator from "../header/header-viev.js";
import { initData, notes } from "./data-handler.js";
import renderNotes from "./render-notes.js";

const init = () => {
    initData();
    const appContainer = document.body;
    const headerElement = headerCreator();
    const wrapperControl = btnCreator();
    const darkModeBtn = headerElement.querySelector("#nightBtn");

    darkModeBtn.addEventListener("click", () => {
        appContainer.classList.toggle("dark");
    });

    appContainer.append(headerElement);
    appContainer.append(wrapperControl);

    renderNotes(notes.favoriteNotes);
    renderNotes(notes.regularNotes);
};

export default init;
