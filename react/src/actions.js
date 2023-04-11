import {
    NAVIGATE,
    STORIES_CREATE,
    STORIES_LIST,
    STORIES_DELETE,
    STORIES_SHOW_EDIT,
    STORIES_EDIT,
    STORIES_ADD_DONATION,
    ADD_NEW_USER,
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
export const storiesEdit = (body, id) => {
    return {
        type: STORIES_EDIT,
        payload: {
            url: "admin/stories/" + id,
            method: "put",
            body,
            show: "stories-list",
            pauseShow: 1000,
        },
    };
};
export const storiesAddDonation = (id, body) => {
    return {
        type: STORIES_ADD_DONATION,
        payload: {
            url: "admin/stories/" + id,
            method: "put",
            body,
            show: "stories-list",
            pauseShow: 1000,
        },
    };
};
export const usersCreate = (body) => {
    return {
        type: ADD_NEW_USER,
        payload: {
            url: "admin/users",
            method: "post",
            body,
            show: "login",
        },
    };
};
