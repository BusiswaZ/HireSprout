import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/hiresproutLogo.jpeg";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                {/* HireSprout Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        alt="HireSprout Logo"
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        {/* Home */}
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        {/* About */}
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>

                        {/* Pages Dropdown */}
                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle"
                                href="#pages"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Pages
                            </a>

                            <ul className="dropdown-menu">

                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/features"
                                    >
                                        Features
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/benefits"
                                    >
                                        Benefits
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/how-it-works"
                                    >
                                        How It Works
                                    </Link>
                                </li>

                            </ul>

                        </li>

                        {/* Contact */}
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;