import { createContext, useReducer } from "react";
import main from "./reducers/main";
import { storiesList } from "./actions";
import axios from "axios";

export const actionsList = {
    "stories-list": storiesList,
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
            axios[action.payload.method](url + action.payload.url).then(
                (res) => {
                    console.log(res.data);
                    action = {
                        ...action,
                        payload: {
                            ...action.payload,
                            ...res.data,
                        },
                    };
                    dispatch(action);
                }
            );
        }
    };
    // const doDispatch = (action) => {
    //     dataDispatch(action);
    // }

    return (
        <Store.Provider
            value={{
                page: store.page,
                pageTop: store.pageTop,
                store,
                dispatch: dataDispatch,
                actionsList,
            }}
        >
            {props.children}
        </Store.Provider>
    );
};
