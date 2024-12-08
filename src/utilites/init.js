import btnCreator from "../btn-control/btn-control-view.js";
import headerCreator from "../header/header-viev.js";

const init = () => {
    const appContainer = document.body;
    const headerElement = headerCreator();
    const wrapperControl = btnCreator();
    const darkModeBtn = headerElement.querySelector("#nightBtn");

    darkModeBtn.addEventListener("click", () => {
        appContainer.classList.toggle("dark");
    });

    appContainer.append(headerElement);
    appContainer.append(wrapperControl);
};

export default init;

// Вынести прослушку в файл кнопки или хедера
// Начасть создание модального окна
