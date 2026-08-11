import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/hiresproutLogo.jpeg";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="row g-4">

                    {/* Logo & Description */}
                    <div className="col-lg-4 col-md-6">

                        <img
                            src={logo}
                            alt="HireSprout"
                            className="footer-logo"
                        />

                        <p className="footer-description">
                            Connecting talented people with opportunities
                            through innovative recruitment solutions.
                        </p>

                       <div className="footer-social">

    <button type="button" className="footer-social-link">
        <i className="bi bi-linkedin"></i>
    </button>

    <button type="button" className="footer-social-link">
        <i className="bi bi-facebook"></i>
    </button>

    <button type="button" className="footer-social-link">
        <i className="bi bi-instagram"></i>
    </button>

    <button type="button" className="footer-social-link">
        <i className="bi bi-twitter-x"></i>
    </button>

</div>
                    </div>


                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">

                        <h5 className="footer-heading">
                            Quick Links
                        </h5>

                        <ul className="footer-links">

                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About Us</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>

                        </ul>

                    </div>


                    {/* Pages */}
                    <div className="col-lg-3 col-md-6">

                        <h5 className="footer-heading">
                            Pages
                        </h5>

                        <ul className="footer-links">

                            <li>
                                <Link to="/how-it-works">
                                    How It Works
                                </Link>
                            </li>

                            <li>
                                <Link to="/benefits">
                                    Benefits
                                </Link>
                            </li>

                            <li>
                                <Link to="/features">
                                    Features
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="col-lg-3 col-md-6">

                        <h5 className="footer-heading">
                            Contact Us
                        </h5>

                        <ul className="footer-contact">

                            <li>
                                <i className="bi bi-geo-alt"></i>

                                <span>
                                    111 Outeniqua Flats, 721 Church St<br />
                                    Arcadia, Gauteng
                                </span>
                            </li>

                            <li>
                                <i className="bi bi-telephone"></i>

                                <span>
                                   083 474 9155
                                </span>
                            </li>

                            <li>
                                <i className="bi bi-envelope"></i>

                                <span>
                                    vhutheluresources@gmail.com
                                </span>
                            </li>

                        </ul>

                    </div>

                </div>


                {/* Bottom Footer */}

                <div className="footer-bottom">

                    <p>
                        © 2026 HireSprout. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;