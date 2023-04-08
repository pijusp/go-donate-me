import {
    NAVIGATE,
    STORIES_LIST,
    STORIES_CREATE,
    REMOVE_MESSAGE,
    STORIES_DELETE,
} from "../types";
import { v4 as uuidv4 } from "uuid";
import { actionsList } from "../store";

export default function main(state, action) {
    const c = structuredClone(state);

    console.log("REDUCER", action);

    switch (action.type) {
        case NAVIGATE:
            c.page = action.payload.to;
            let defaultNav = "nav";

            switch (action.payload.to) {
                case "login":
                case "register":
                    c.pageTop = "";
                    break;
                default:
                    c.pageTop = defaultNav;
            }
            return c;
        case STORIES_LIST:
            c.pageTop = "nav";
            c.page = action.payload.page;
            c.data = action.payload.data;
            return c;

        case STORIES_CREATE:
        case STORIES_DELETE:
            if (action.payload.msg) {
                const uuid = uuidv4();
                if (!c.messages) {
                    c.messages = [];
                }
                c.messages.push({ ...action.payload.msg, id: uuid });

                setTimeout(() => {
                    action.doDispatch({
                        type: REMOVE_MESSAGE,
                        payload: {
                            uuid,
                        },
                    });
                }, 3000);
            }
            if (action.payload.show) {
                setTimeout(
                    () => {
                        action.doDispatch(actionsList[action.payload.show]());
                    },
                    action.payload.hasOwnProperty("pauseShow")
                        ? action.payload.pauseShow
                        : 1000
                );
            }
            return c;
        case REMOVE_MESSAGE:
            c.messages = c.messages.filter((m) => m.id !== action.payload.uuid);
            return c;
        default:
    }

    return state;
}
