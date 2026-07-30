
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    {/* Company */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h4>HireSprout</h4>
                        <p>
                            Connecting employers with talented professionals
                            through a modern recruitment platform.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5>Quick Links</h5>

                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5>Contact</h5>

                        <p>Email: info@hiresprout.com</p>
                        <p>Phone: +27 12 345 6789</p>
                        <p>Pretoria, South Africa</p>
                    </div>

                    {/* Social Media */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5>Follow Us</h5>

                        <ul className="footer-links">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>

                </div>

                <hr />

                <div className="text-center">
                    <p className="copyright">
                        © 2026 HireSprout. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;