import { NAVIGATE, STORIES_LIST } from "./types";

export const navigate = (to) => {
    return {
        type: NAVIGATE,
        payload: {
            to,
        },
    };
};
export const storiesList = (_) => {
    return {
        type: STORIES_LIST,
        payload: {
            url: "admin/stories",
            method: "get",
            page: "stories-list",
        },
    };
};
