import creatorElement from "../utilites/creator.js";
import { headerParams } from "./header-params.js";

const headerCreator = () => {
    const header = creatorElement(headerParams);
    return header;
};

export default headerCreator;
