import { useContext } from "react";
import { navigate } from "../actions";
import { Store } from "../store";

export default function Link({ to, children, className }) {
    const { dispatch } = useContext(Store);

    const go = (e) => {
        e.preventDefault();
        dispatch(navigate(to));
    };

    return (
        <a href={to} className={className} onClick={go}>
            {children}
        </a>
    );
}
