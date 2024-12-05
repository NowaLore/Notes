import headerCreator from "../header/header-viev.js";

const init = () => {
    const appContainer = document.body;
    const headerElement = headerCreator();
    const darkModeBtn = headerElement.querySelector("#nightBtn");

    darkModeBtn.addEventListener("click", () => {
        appContainer.classList.toggle("dark");
    });

    appContainer.append(headerElement);
};

export default init;
