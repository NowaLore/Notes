import creatorElement from "../utilites/creator.js";
import {
    headerParams,
    iconWrapperParams,
    nightmodeButtonParams,
    titleParams,
} from "./params/header-params.js";

const headerCreator = () => {
    const header = creatorElement(headerParams);
    const title = creatorElement(titleParams);
    const nightmodeBtn = creatorElement(nightmodeButtonParams);
    const iconWrapper = creatorElement(iconWrapperParams);

    header.append(title);
    header.append(nightmodeBtn);
    nightmodeBtn.append(iconWrapper);
    return header;
};

export default headerCreator;
