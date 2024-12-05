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

export default creatorElement;
