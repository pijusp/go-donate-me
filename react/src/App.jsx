import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import { useContext } from "react";
import { Store } from "./store";

import Nav from "./components/Nav";
import StoriesCreate from "./pages/categories/Create";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import StoriesList from "./pages/categories/List";
import Messages from "./components/Messages";
import SectionsEdit from "./pages/categories/Edit";

function App() {
    const { page, pageTop, messages } = useContext(Store);
    return (
        <>
            {pageTop === "nav" ? <Nav /> : null}

            {messages && messages.length ? (
                <Messages messages={messages} />
            ) : null}

            {page === "home" ? <Home /> : null}
            {page === "stories-create" ? <StoriesCreate /> : null}
            {page === "stories-list" ? <StoriesList /> : null}
            {page === "stories-show-edit" ? <SectionsEdit /> : null}
            {page === "login" ? <Login /> : null}
        </>
    );
}
export default App;
