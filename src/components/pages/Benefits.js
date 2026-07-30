
import React, { useState } from "react";
import benefitsBanner from "../images/fitting.jpg";
import Footer from "../inc/Footer";


const benefits = [
  {
    id: 1,
    title: "Simplifies Recruitment",
    icon: "bi-briefcase-fill",
    description:
      "Streamline the hiring process by managing vacancies, applications, and candidates from one platform.",
  },
  {
    id: 2,
    title: "Saves Time",
    icon: "bi-clock-fill",
    description:
      "Reduce repetitive administrative tasks with a faster and more efficient recruitment workflow.",
  },
  {
    id: 3,
    title: "Paperless Applications",
    icon: "bi-file-earmark-text-fill",
    description:
      "Submit and review applications digitally, eliminating unnecessary paperwork.",
  },
  {
    id: 4,
    title: "Secure Document Management",
    icon: "bi-shield-lock-fill",
    description:
      "Safely store and manage applicant documents with organized and secure access.",
  },
  {
    id: 5,
    title: "Easy Applicant Tracking",
    icon: "bi-person-lines-fill",
    description:
      "Monitor every applicant's progress throughout the recruitment process with ease.",
  },
  {
    id: 6,
    title: "Faster Hiring Decisions",
    icon: "bi-check-circle-fill",
    description:
      "Quickly review applications and make informed hiring decisions without delays.",
  },
  {
    id: 7,
    title: "Responsive on All Devices",
    icon: "bi-laptop-fill",
    description:
      "Access HireSprout seamlessly on desktops, tablets, and smartphones for maximum flexibility.",
  },
];
function Benefits() {

const [activeBenefit, setActiveBenefit] = useState(null);

    return (
        <>

            {/* Header */}
           <section className="benefits-header" style={{  backgroundImage: `linear-gradient(rgba(10,79,163,.78), rgba(10,79,163,.78)), url(${benefitsBanner})`
         }}
>
                <div className="benefits-overlay">

                    <div className="container">

                        <div className="text-center">

                            

                            <h1 className="benefits-title">
                                Benefits
                            </h1>

                            <p className="benefits-subtitle">
                                Discover how HireSprout simplifies recruitment,
                                saves time and provides a secure, paperless
                                hiring experience for employers and job seekers.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Benefits */}

            <section className="benefits-section">

                <div className="container">

                  <div className="benefits-grid">
  {benefits.map((benefit) => (
    <div
      key={benefit.id}
      className="benefit-item"
      onClick={() =>
        setActiveBenefit(
          activeBenefit === benefit.id ? null : benefit.id
        )
      }
    >
      <div className="benefit-circle">
        <div className="benefit-icon-circle">
    <i className={`bi ${benefit.icon}`}></i>
          </div>

        <h4>{benefit.title}</h4>
      </div>

      {activeBenefit === benefit.id && (
        <div className="benefit-description">
          <p>{benefit.description}</p>
        </div>
      )}
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
    
