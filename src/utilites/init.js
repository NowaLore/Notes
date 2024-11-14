import headerCreator from "../header/header-viev.js";

const init = () => {
    const appContainer = document.body;
    const headerElement = headerCreator();

    appContainer.append(headerElement);
};

export default init;
