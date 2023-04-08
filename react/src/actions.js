import {
    NAVIGATE,
    STORIES_CREATE,
    STORIES_LIST,
    STORIES_DELETE,
    STORIES_SHOW_EDIT,
} from "./types";

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
            show: "stories-list",
        },
    };
};
export const storiesDelete = (id) => {
    return {
        type: STORIES_DELETE,
        payload: {
            url: "admin/stories/" + id,
            method: "delete",
            show: "stories-list",
            pauseShow: 0,
        },
    };
};

export const storiesShowEdit = (id) => {
    return {
        type: STORIES_SHOW_EDIT,
        payload: {
            url: "admin/stories/" + id,
            method: "get",
            page: "stories-show-edit",
        },
    };
};
