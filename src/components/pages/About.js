import React from "react";
import Footer from "../inc/Footer.js";
import { Link } from "react-router-dom";
import Contract from "../images/contract.jpg";

function About(){

    return(
          <>
           {/* About Header */}

<section className="about-header">

    <div className="container text-center">

       

        <h1 className="about-title">
            About HireSprout
        </h1>

        <p className="about-subtitle">
            Learn more about our platform and how we connect
            talented professionals with trusted employers through
            a modern recruitment experience.
        </p>

    </div>

</section>
 {/* What is HireSprout */}

<section className="about-section">

    <div className="container">

        <div className="row align-items-center g-5">

            {/* Left Side */}

            <div className="col-lg-6">

               

                <h2 className="about-section-title">
                    What is HireSprout?
                </h2>

                <div className="title-underline"></div>

                <p className="about-text">
                    HireSprout is a modern recruitment platform that connects
                    organizations with talented professionals through a simple,
                    secure, and efficient hiring process.
                </p>

                <p className="about-text">
                    Our platform helps employers advertise vacancies, manage
                    applications, and identify qualified candidates while
                    providing job seekers with an easy way to discover and
                    apply for career opportunities.
                </p>

                <Link
                    to="/features"
                    className="btn btn-primary about-btn"
                >
                    Explore Us
                </Link>

            </div>

            {/* Right Side */}

            <div className="col-lg-6 text-center">

                <img
                    src={Contract}
                    alt="About HireSprout"
                    className="img-fluid  w-75 about-image"
                />

            </div>

        </div>

    </div>

</section>
            {/* Mission & Vision */}

<section className="mission-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="mandv-section-title">
                Mission & Vision
            </h2>

            <div className="mandvtitle-underline mx-auto"></div>

        </div>

        <div className="row g-4">

            <div className="col-lg-6">

                <div className="mission-card">

                    <h3>Our Mission</h3>

                    <p>
                        To simplify recruitment by providing an innovative,
                        secure, and user-friendly platform that connects
                        employers with talented professionals while creating
                        meaningful career opportunities.
                    </p>

                </div>

            </div>

            <div className="col-lg-6">

                <div className="mission-card">

                    <h3>Our Vision</h3>

                    <p>
                        To become a trusted recruitment platform that empowers
                        organizations and job seekers by making hiring smarter,
                        faster, and more accessible across every industry.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

       {/* The Problem We Solve */}

<section className="problem-section">

    <div className="container">

        <div className="text-center mb-5">


            <h2 className="mandv-section-title">
                The Problem We Solve
            </h2>

            <div className="mandvtitle-underline mx-auto"></div>

        </div>

        <div className="row justify-content-center">

            <div className="col-lg-10">

                <p className="problem-text">
                    Traditional recruitment can be time-consuming, costly, and
                    difficult to manage. Employers often spend valuable time
                    reviewing unsuitable applications, while qualified job
                    seekers struggle to find opportunities that match their
                    skills and career goals.
                </p>

                <p className="problem-text">
                    HireSprout addresses these challenges by providing one
                    centralized platform where organizations can advertise
                    vacancies, manage applications efficiently, and connect with
                    the right candidates. At the same time, job seekers can
                    easily discover relevant opportunities and apply with
                    confidence.
                </p>

            </div>

        </div>

    </div>

</section>

           {/* Why Organizations Choose HireSprout */}

<section className="why-section">

    <div className="container">

        <div className="text-center mb-5">


            <h2 className="mandv-section-title">
                Why Choose HireSprout
            </h2>

            <p className="section-subtitle">
                We help organizations simplify recruitment while providing
                job seekers with a smooth and reliable experience.
            </p>

        </div>

        <div className="row justify-content-center">

            <div className="col-lg-5">

                <ul className="benefits-list">
                    <li>Faster recruitment process</li>
                    <li>Secure recruitment platform</li>
                    <li>Access to qualified candidates</li>
                </ul>

            </div>

            <div className="col-lg-5">

                <ul className="benefits-list">
                    <li>User-friendly interface</li>
                    <li>Responsive across all devices</li>
                    <li>Modern recruitment solutions</li>
                </ul>

            </div>

        </div>

    </div>

</section>

            <Footer />

        </>
    );
}
export default About;