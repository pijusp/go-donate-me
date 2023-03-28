import { createContext, useReducer } from "react";
import main from "./reducers/main";

export const Store = createContext();

export const Provider = (props) => {
    const [store, dispatch] = useReducer(main, {
        page: "home",
        pageTop: "nav",
    });

    return (
        <Store.Provider
            value={{ page: store.page, pageTop: store.pageTop, dispatch }}
        >
            {props.children}
        </Store.Provider>
    );
};
