import creatorElement from "../utilites/creator";
import inputParams from "./input-params";

const searchCreator = () => {
    const inputElement = creatorElement(inputParams);
    inputElement.addEventListener("input", (event) => search(event));
    return inputElement;
};

const search = (event) => {
    console.log(event.target.value);
};

export default searchCreator;
