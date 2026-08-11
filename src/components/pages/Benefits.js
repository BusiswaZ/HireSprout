import React from "react";
import "../styles/Benefits.css";
import Footer from "../inc/Footer";


const benefits = [
    {
        id: 1,
        title: "Simplifies Recruitment",
        icon: "bi-diagram-3-fill",
        description:
            "Streamline the recruitment process by connecting employers and job seekers through one platform."
    },
    {
        id: 2,
        title: "Saves Time",
        icon: "bi-clock-fill",
        description:
            "Reduce the time spent searching for candidates, reviewing applications and managing recruitment."
    },
    {
        id: 3,
        title: "Paperless Application Process",
        icon: "bi-file-earmark-check-fill",
        description:
            "Submit applications and supporting documents digitally without relying on unnecessary paperwork."
    },
    {
        id: 4,
        title: "Secure Document Management",
        icon: "bi-shield-lock-fill",
        description:
            "Manage CVs and supporting documents through a more organized and secure digital process."
    },
    {
        id: 5,
        title: "Easy Applicant Tracking",
        icon: "bi-person-lines-fill",
        description:
            "Keep track of applications and candidates throughout the recruitment process."
    },
    {
        id: 6,
        title: "Faster Hiring Decisions",
        icon: "bi-lightning-charge-fill",
        description:
            "Help employers review suitable candidates and make recruitment decisions more efficiently."
    },
    {
        id: 7,
        title: "Responsive Across All Devices",
        icon: "bi-phone-fill",
        description:
            "Access HireSprout comfortably across desktops, tablets and mobile devices."
    }
];
function Benefits() {


    return (
        <>

            <section className="benefits-header">

    <div className="container">

        <div className="benefits-header-content">

            <h1>
                Why Choose HireSprout?
            </h1>

            <p>
                Discover the benefits that make recruitment simpler,
                faster and more efficient for employers and job seekers.
            </p>

        </div>

    </div>

</section>
           <section className="benefits-section">

    <div className="container">

        <div className="benefits-grid">

            {benefits.map((benefit) => (

                <div
                    className="benefit-item"
                    key={benefit.id}
                >

                    <div className="benefit-icon">
                        <i className={`bi ${benefit.icon}`}></i>
                    </div>

                    

                    <h2>
                        {benefit.title}
                    </h2>

                    <p>
                        {benefit.description}
                    </p>

                </div>

            ))}

        </div>

    </div>

</section>
          <Footer />
        </>
       
    );
}

export default Benefits;
    
