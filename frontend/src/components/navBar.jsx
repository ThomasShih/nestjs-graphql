import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li
                                className={
                                    active === "home"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className={
                                    active === "products"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/products">Products</Link>
                            </li>
                            <li
                                className={
                                    active === "users"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;