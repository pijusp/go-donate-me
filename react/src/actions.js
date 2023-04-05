import { NAVIGATE, STORIES_CREATE, STORIES_LIST } from "./types";

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
export const storiesCreate = (body) => {
    return {
        type: STORIES_CREATE,
        payload: {
            url: "admin/stories",
            method: "post",
            body,
            page: "stories-list",
        },
    };
};
