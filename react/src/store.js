import { createContext, useReducer } from "react";
import main from "./reducers/main";
import { storiesCreate, storiesList, storiesDelete } from "./actions";
import axios from "axios";

export const actionsList = {
    "stories-list": storiesList,
    "stories-create": storiesCreate,
    "stories-delete": storiesDelete,
};
const url = "http://localhost:3003/";

export const Store = createContext();

export const Provider = (props) => {
    const [store, dispatch] = useReducer(main, {
        page: "home",
        pageTop: "nav",
    });

    const dataDispatch = (action) => {
        if (!action.payload || !action.payload.url) {
            dispatch(action);
        } else {
            const args = [url + action.payload.url];
            if (action.payload.body) {
                args.push(action.payload.body);
            }
            axios[action.payload.method](...args).then((res) => {
                action = {
                    ...action,
                    payload: {
                        ...action.payload,
                        ...res.data,
                    },
                    doDispatch,
                };
                dispatch(action);
            });
        }
    };
    const doDispatch = (action) => {
        dataDispatch(action);
    };

    return (
        <Store.Provider
            value={{
                page: store.page,
                pageTop: store.pageTop,
                store,
                dispatch: dataDispatch,
                actionsList,
                messages: store.messages,
            }}
        >
            {props.children}
        </Store.Provider>
    );
};
