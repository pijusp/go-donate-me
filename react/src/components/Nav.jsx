import Link from "./Link";

export default function Nav() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ backgroundColor: "#f5f5dc" }}
        >
            <div className="container-fluid">
                <a className="navbar-brand">Go-Donate-ME!</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="home" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="categories-create" className="nav-link">
                                Create a goal
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Link to="login" className="nav-link">
                            Log In
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}
