import React from "react";
import { Link } from "react-router-dom";
import Footer from "../inc/Footer";
import heroImage from "../images/contract.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <>
            <main>

               {/* Hero Section */}
<section className="hero-section">

    <div className="hero-background">

        <img
            src={heroImage}
            alt="Business professionals shaking hands"
            className="hero-image"
        />

        <div className="hero-overlay">

            <div className="container">

                <div className="hero-content">

                    <p className="hero-label">
                        WELCOME TO HIRESPROUT
                    </p>

                    <h1 className="hero-title">
                        Grow Your Career.
                        <br />
                        Grow Your <span>Team.</span>
                    </h1>

                    <div className="hero-line"></div>

                    <p className="hero-description">
                        HireSprout connects talented job seekers with
                        employers through a simple and efficient
                        recruitment platform.
                    </p>

                    <div className="hero-buttons">

                     <Link to="/about" className="hero-btn">
                            Learn More
                             </Link>

                     <Link to="/contact" className="hero-btn">
                                   Contact Us
                              </Link>

                             </div>

                </div>

            </div>

        </div>

    </div>

</section>
{/* Platform Overview */}
<section className="overview-section">

    <div className="container">

        <div className="overview-content">

            <p className="overview-label">
                ABOUT HIRESPROUT
            </p>

            <h2>
                Connecting Talent With
                <span> Opportunity.</span>
            </h2>

            <div className="overview-line"></div>

            <p className="overview-text">
                HireSprout is a recruitment platform designed to connect
                talented job seekers with employers. The platform makes it
                easier for candidates to discover opportunities and for
                employers to find suitable talent through a simple and
                efficient recruitment process.
            </p>

        </div>

    </div>

</section>
{/* Statistics Section */}
<section className="statistics-section">
    <div className="container">

        <div className="row g-4">

            {/* Statistic 1 */}
            <div className="col">
                <div className="stat-card stat-teal">
                    

                    <h3>500+</h3>

                    <div className="stat-divider"></div>

                    <p>Job Opportunities</p>
                </div>
            </div>

            {/* Statistic 2 */}
            <div className="col">
                <div className="stat-card stat-navy">
                    

                    <h3>1,000+</h3>

                    <div className="stat-divider"></div>

                    <p>Job Seekers</p>
                </div>
            </div>

            {/* Statistic 3 */}
            <div className="col">
                <div className="stat-card stat-teal">
                    

                    <h3>200+</h3>

                    <div className="stat-divider"></div>

                    <p>Registered Employers</p>
                </div>
            </div>

            {/* Statistic 4 */}
            <div className="col">
                <div className="stat-card stat-navy">
                   

                    <h3>850+</h3>

                    <div className="stat-divider"></div>

                    <p>Successful Placements</p>
                </div>
            </div>

            {/* Statistic 5 */}
            <div className="col">
                <div className="stat-card stat-teal">
                    

                    <h3>95%</h3>

                    <div className="stat-divider"></div>

                    <p>Satisfaction Rate</p>
                </div>
            </div>
              {/* Statistic 6 */}
            <div className="col">
                <div className="stat-card stat-navy">
                    

                    <h3>24/7</h3>

                    <div className="stat-divider"></div>

                    <p>Support Available</p>
                </div>
            </div>
            

        </div>

    </div>
</section>

            </main>

            <Footer />
        </>
    );
}

export default Home;