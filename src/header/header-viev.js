import creatorElement from "../utilites/creator.js";
import {
    headerParams,
    iconWrapperParams,
    nightmodeButtonParams,
    titleParams,
    wrapperHeaderParams,
} from "./params/header-params.js";
import searchCreator from "./search.js";

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

export default headerCreator;
