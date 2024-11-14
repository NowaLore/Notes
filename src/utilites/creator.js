const creatorElement = (paramsElement) => {
    const element = document.createElement(paramsElement.tagName);
    element.classList.add(...paramsElement.classList);
    return element;
};

export default creatorElement;
