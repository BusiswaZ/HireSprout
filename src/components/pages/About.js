import React from "react";
import Footer from "../inc/Footer";
import "../styles/About.css";
import whyImage from "../images/fitting.jpg";

function About() {
    return (
        <>
            {/* About Header */}
            <section className="about-header">

                <div className="container">

                    <div className="about-header-content">

                        <p className="about-label">
                            ABOUT HIRESPROUT
                        </p>

                        <h1>
                            Connecting Talent With Opportunity
                        </h1>

                        <p className="about-intro">
                            HireSprout is a recruitment platform that
                            connects talented job seekers with employers,
                            making the recruitment process simpler,
                            faster and more efficient.
                        </p>

                    </div>

                </div>

            </section>


            {/* About Information Cards */}
            <section className="about-cards-section">

                <div className="container">

                    <div className="row g-4 align-items-stretch">

                        {/* Who We Are */}
                        <div className="col-lg-5 col-md-12">

                            <div className="about-card who-we-are">

                                <div className="card-accent"></div>

                                <h2>
                                    Who We Are
                                </h2>

                                <p>
                                    HireSprout is a recruitment platform
                                    designed to connect job seekers with
                                    organizations looking for suitable
                                    talent. We aim to make finding
                                    opportunities and recruiting candidates
                                    easier through one simple platform.
                                </p>

                            </div>

                        </div>


                        {/* Vision */}
                        <div className="col-lg-3 col-md-6">

                            <div className="about-card">

                                <div className="card-accent"></div>

                                <h3>
                                    Our Vision
                                </h3>

                                <p>
                                    To create a platform where people and
                                    organizations can connect, grow and
                                    succeed through better recruitment
                                    opportunities.
                                </p>

                            </div>

                        </div>


                        {/* Mission */}
                        <div className="col-lg-4 col-md-6">

                            <div className="about-card">

                                <div className="card-accent"></div>

                                <h3>
                                    Our Mission
                                </h3>

                                <p>
                                    To simplify recruitment by connecting
                                    the right people with the right
                                    opportunities through an efficient
                                    and accessible platform.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
           {/* Problem We Solve */}
<section className="problem-section">

    <div className="container">

        <div className="problem-heading">

            

            <h2>
                The Problem We Solve
            </h2>

            <div className="problem-line"></div>

            <p>
                Recruitment can be challenging for both employers and
                job seekers. HireSprout aims to make the connection
                between talent and opportunity simpler and more efficient.
            </p>

        </div>


        <div className="row g-4">

            {/* Problem 1 */}
            <div className="col-lg-3 col-md-6">

                <div className="problem-card">

                    <div className="problem-number">
                        01
                    </div>

                    <h3>
                        Difficult Talent Discovery
                    </h3>

                    <p>
                        Organizations can struggle to find candidates
                        with the right skills and experience.
                    </p>

                </div>

            </div>


            {/* Problem 2 */}
            <div className="col-lg-3 col-md-6">

                <div className="problem-card">

                    <div className="problem-number">
                        02
                    </div>

                    <h3>
                        Time-Consuming Recruitment
                    </h3>

                    <p>
                        Traditional recruitment processes can take
                        time and involve multiple steps.
                    </p>

                </div>

            </div>


            {/* Problem 3 */}
            <div className="col-lg-3 col-md-6">

                <div className="problem-card">

                    <div className="problem-number">
                        03
                    </div>

                    <h3>
                        Limited Opportunities
                    </h3>

                    <p>
                        Job seekers may struggle to discover
                        opportunities that match their skills and goals.
                    </p>

                </div>

            </div>


            {/* Problem 4 */}
            <div className="col-lg-3 col-md-6">

                <div className="problem-card">

                    <div className="problem-number">
                        04
                    </div>

                    <h3>
                        Inefficient Hiring
                    </h3>

                    <p>
                        Employers need a simpler way to connect with
                        suitable candidates.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>
{/* Why Choose HireSprout */}
<section className="why-choose-section">

    <div className="container">

        <div className="row g-0 align-items-stretch">

            {/* Image */}
            <div className="col-lg-6">

                <div className="why-image">

                    <img
                        src={whyImage}
                        alt="Professionals working together"
                    />

                    <div className="why-image-overlay"></div>

                </div>

            </div>


            {/* Reasons */}
            <div className="col-lg-6">

                <div className="why-content">

                    <div className="why-accent"></div>

                    <h2>
                        Why Choose HireSprout?
                    </h2>

                    <p className="why-intro">
                        HireSprout provides a simple and effective way
                        for organizations to connect with suitable
                        talent and improve their recruitment process.
                    </p>


                    {/* Reason 1 */}
                    <div className="why-reason">

                        <div className="why-check">
                            <i className="bi bi-check"></i>
                        </div>

                        <div>
                            <h3>
                                Access to Quality Talent
                            </h3>

                            <p>
                                Connect with a wide pool of qualified
                                and skilled candidates.
                            </p>
                        </div>

                    </div>


                    {/* Reason 2 */}
                    <div className="why-reason">

                        <div className="why-check">
                            <i className="bi bi-check"></i>
                        </div>

                        <div>
                            <h3>
                                Save Time & Resources
                            </h3>

                            <p>
                                Simplify the recruitment process and
                                reduce the time spent finding candidates.
                            </p>
                        </div>

                    </div>


                    {/* Reason 3 */}
                    <div className="why-reason">

                        <div className="why-check">
                            <i className="bi bi-check"></i>
                        </div>

                        <div>
                            <h3>
                                Cost-Effective Solutions
                            </h3>

                            <p>
                                Reduce recruitment costs while finding
                                suitable candidates efficiently.
                            </p>
                        </div>

                    </div>


                    {/* Reason 4 */}
                    <div className="why-reason">

                        <div className="why-check">
                            <i className="bi bi-check"></i>
                        </div>

                        <div>
                            <h3>
                                User-Friendly Platform
                            </h3>

                            <p>
                                An easy-to-use platform for both
                                employers and job seekers.
                            </p>
                        </div>

                    </div>


                    {/* Reason 5 */}
                    <div className="why-reason">

                        <div className="why-check">
                            <i className="bi bi-check"></i>
                        </div>

                        <div>
                            <h3>
                                Reliable & Secure
                            </h3>

                            <p>
                                Designed to provide a reliable
                                recruitment experience.
                            </p>
                        </div>

                    </div>


                    {/* Reason 6 */}
                    <div className="why-reason">

                        <div className="why-check">
                            <i className="bi bi-check"></i>
                        </div>

                        <div>
                            <h3>
                                Dedicated Support
                            </h3>

                            <p>
                                Helping users navigate the platform
                                and recruitment process.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

            <Footer />
        </>
    );
}

export default About;