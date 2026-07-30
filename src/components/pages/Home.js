import React from "react";
import { Link } from "react-router-dom";
import Footer from "../inc/Footer";


function Home() {
  return (
    <>
   {/* Hero Section */}

<section className="hero-section">

    <div className="hero-overlay">

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-lg-8 text-center">

                    <h1 className="hero-title">
                        Recruit Smarter.<br />
                        Hire Faster.
                    </h1>

                    <p className="hero-text">
                        Connecting talented professionals with leading companies
                        through an innovative recruitment platform designed for
                        speed, simplicity, and success.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/about"
                            className="btn btn-light btn-lg me-3"
                        >
                            Learn More
                        </Link>

                        <Link
                            to="/contact"
                            className="btn btn-outline-light btn-lg"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

            <section className="services-section">
    <div className="container">

        <div className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
                Everything you need to simplify recruitment and connect
                employers with talented professionals.
            </p>
        </div>

        <div className="row g-4">

            <div className="col-md-4">
                <div className="service-card">
                    <h4>For Employers</h4>
                    <p>
                        Post job opportunities, manage applications,
                        and find the right candidates quickly.
                    </p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="service-card featured-card">
                    <h4>For Job Seekers</h4>
                    <p>
                        Search for opportunities, apply online,
                        and build your career with confidence.
                    </p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="service-card">
                    <h4>Recruitment Made Easy</h4>
                    <p>
                        A secure platform designed to make hiring
                        simple, efficient, and accessible.
                    </p>
                </div>
            </div>

        </div>

    </div>
</section>
<section className="stats-section">
    <div className="container">

        <div className="text-center mb-5">
            <h2 className="section-title-white">Our Impact</h2>
            <p className="section-subtitle-white">
               Trusted by employers and job seekers to create meaningful
    connections and successful hiring experiences.
            </p>
        </div>

        <div className="row text-center g-4">

            <div className="col-6 col-md-3">
                <div className="stat-card">
                    <h2>1200+</h2>
                    <p>Applicants</p>
                </div>
            </div>

            <div className="col-6 col-md-3">
                <div className="stat-card">
                    <h2>500+</h2>
                    <p>Vacancies</p>
                </div>
            </div>

            <div className="col-6 col-md-3">
                <div className="stat-card">
                    <h2>150+</h2>
                    <p>Companies</p>
                </div>
            </div>

            <div className="col-6 col-md-3">
                <div className="stat-card">
                    <h2>95%</h2>
                    <p>Hiring Success</p>
                </div>
            </div>

        </div>

    </div>
    </section>
    {/* ================= WHY CHOOSE HIRESPROUT ================= */}

<section className="why-section">
    <div className="container">

        <div className="text-center mb-5">
            <h2 className="section-title">Why Choose HireSprout?</h2>
            <p className="section-subtitle">
                We make recruitment simple, secure, and efficient for both employers and job seekers.
            </p>
        </div>

        <div className="row g-4">

            <div className="col-md-6 col-lg-3">
                <div className="why-card">
                    <h4>Easy Recruitment</h4>
                    <p>
                        Simplify the hiring process with an easy-to-use platform designed for efficiency.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="why-card">
                    <h4>Secure Platform</h4>
                    <p>
                        Protect user information with a secure and reliable recruitment experience.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="why-card">
                    <h4>Fast Hiring</h4>
                    <p>
                        Connect employers with qualified candidates quickly and effectively.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="why-card">
                    <h4>User Friendly</h4>
                    <p>
                        A clean, responsive interface that is easy to navigate on any device.
                    </p>
                </div>
            </div>

        </div>

    </div>
</section>
<Footer />
        </>
    );
}

export default Home;