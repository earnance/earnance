import authenticationPaths from "./auth.docs.js";
import basicInfo from "./basic.info.js";

export default {
    ...basicInfo,
    paths: {
        ...authenticationPaths
    }
}