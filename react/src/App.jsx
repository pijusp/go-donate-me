import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import { useContext } from "react";
import { Store } from "./store";

import Nav from "./components/Nav";
import CategoriesCreate from "./pages/categories/Create";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";

function App() {
    const { page, pageTop } = useContext(Store);
    return (
        <>
            {pageTop === "nav" ? <Nav /> : null}
            {page === "home" ? <Home /> : null}
            {page === "categories-create" ? <CategoriesCreate /> : null}
            {page === "login" ? <Login /> : null}
        </>
    );
}
export default App;
