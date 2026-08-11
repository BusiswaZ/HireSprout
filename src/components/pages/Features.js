import React, { useState } from "react";
import Footer from "../inc/Footer";
import "../styles/Features.css";


const employerFeatures = [
  {
    id: 1,
    title: "Create & Publish Vacancies",
    icon: "bi-briefcase-fill",
    description:
      "Create professional job vacancies, define job requirements, and publish them to attract qualified candidates.",
    benefits: [
      "Publish vacancies quickly",
      "Reach qualified candidates",
      "Manage all vacancies from one dashboard",
    ],
  },
  {
    id: 2,
    title: "Customize Application Forms",
    icon: "bi-ui-checks-grid",
    description:
      "Customize application forms to collect the information required for each position.",
    benefits: [
      "Collect relevant applicant information",
      "Reduce incomplete applications",
      "Standardize recruitment",
    ],
  },
  {
    id: 3,
    title: "Review Applications",
    icon: "bi-file-earmark-text-fill",
    description:
      "Review submitted applications in one organized dashboard.",
    benefits: [
      "Compare candidates easily",
      "Access all applications in one place",
      "Reduce paperwork",
    ],
  },
  {
    id: 4,
    title: "Filter Applicants",
    icon: "bi-funnel-fill",
    description:
      "Filter applicants based on qualifications, skills, and experience.",
    benefits: [
      "Shortlist candidates faster",
      "Improve hiring decisions",
      "Save recruitment time",
    ],
  },
  {
    id: 5,
    title: "Accept or Reject Applications",
    icon: "bi-check-circle-fill",
    description:
      "Accept successful applicants and reject unsuccessful applications efficiently.",
    benefits: [
      "Manage hiring decisions",
      "Keep applicant records organized",
      "Speed up recruitment",
    ],
  },
  {
    id: 6,
    title: "Export Applicant Data",
    icon: "bi-download",
    description:
      "Export applicant information for reporting and record keeping.",
    benefits: [
      "Generate recruitment reports",
      "Store applicant records",
      "Share recruitment data securely",
    ],
  },
  {
    id: 7,
    title: "Download Submitted CVs",
    icon: "bi-folder2-open",
    description:
      "Download submitted CVs and supporting documents securely.",
    benefits: [
      "Access documents anytime",
      "Store files securely",
      "Review applications offline",
    ],
  },
];
const jobSeekerFeatures = [
  {
    id: 1,
    title: "Browse Available Vacancies",
    icon: "bi-search",
    description:
      "Browse available job opportunities posted by employers.",
    benefits: [
      "Find jobs quickly",
      "Search opportunities easily",
      "Discover careers that match your skills",
    ],
  },
  {
    id: 2,
    title: "View Detailed Job Descriptions",
    icon: "bi-card-text",
    description:
      "Read complete job descriptions, responsibilities, and requirements before applying.",
    benefits: [
      "Understand employer expectations",
      "Compare different opportunities",
      "Apply with confidence",
    ],
  },
  {
    id: 3,
    title: "Submit Online Applications",
    icon: "bi-send-fill",
    description:
      "Submit job applications online without paperwork.",
    benefits: [
      "Fast application process",
      "Paperless recruitment",
      "Apply from anywhere",
    ],
  },
  {
    id: 4,
    title: "Upload CVs & Supporting Documents",
    icon: "bi-cloud-arrow-up-fill",
    description:
      "Securely upload your CV and supporting documents during the application process.",
    benefits: [
      "Secure file uploads",
      "Attach multiple supporting documents",
      "Keep applications complete",
    ],
  },
  {
    id: 5,
    title: "Receive Confirmation",
    icon: "bi-envelope-check-fill",
    description:
      "Receive confirmation once your application has been submitted successfully.",
    benefits: [
      "Know your application was received",
      "Reduce uncertainty",
      "Track your submissions",
    ],
  },
];
function Features() {
    const [activeRole, setActiveRole] = useState("employer");
   const [selectedFeature, setSelectedFeature] = useState(0);
    const features =activeRole === "employer"
        ? employerFeatures
        : jobSeekerFeatures;


    return (

        <>

           {/* ===========================
        FEATURES HEADER
=========================== */}

<section className="features-header">
    <div className="container">

        <div className="features-header-content">

            <h1>
                Explore HireSprout Features
            </h1>

            <p>
                Discover the tools and features that simplify recruitment
                for employers while making job searching and applications
                easier for job seekers.
            </p>

        </div>

    </div>
</section>

            {/* ===========================
        ROLE SWITCH
=========================== */}

<section className="role-switch-section">

    <div className="container">

        <div className="role-switch">

            <button
                className={activeRole === "employer" ? "active-role" : ""}
                onClick={() => {
                    setActiveRole("employer");
                    setSelectedFeature(0);
                }}
            >
                <i className="bi bi-briefcase-fill"></i>

                Employer

            </button>

            <button
                className={activeRole === "jobseeker" ? "active-role" : ""}
                onClick={() => {
                    setActiveRole("jobseeker");
                    setSelectedFeature(0);
                }}
            >
                <i className="bi bi-person-fill"></i>

                Job Seeker

            </button>

        </div>

    </div>

</section>

            {/* ===========================
        FEATURES SECTION
=========================== */}

<section className="features-section">

    <div className="container">

        <div className="features-layout">

            {/* Left Navigation */}

            <div className="features-menu">

                {features.map((feature, index) => (

                    <div
                        key={feature.id}
                        className={`feature-item ${
                            selectedFeature === index ? "active-feature" : ""
                        }`}
                        onClick={() => setSelectedFeature(index)}
                    >

                        <div className="feature-icon">

                            <i className={`bi ${feature.icon}`}></i>

                        </div>

                        <span>{feature.title}</span>

                    </div>

                ))}

            </div>

            {/* Right Details */}

          <div className="feature-details">

             <div className="details-icon">

             <i className={`bi ${features[selectedFeature].icon}`}></i>

              </div>

                 <h2>
                  {features[selectedFeature].title}
                   </h2>

                  <p>
              {features[selectedFeature].description}
               </p>

              </div>

        </div>

    </div>

</section>

     
{/* =========================
    READY TO JOIN
========================= */}

<section className="ready-section">

    <div className="container">

        <div className="ready-content">

            <div className="ready-text">

                <div className="ready-accent"></div>

                <h2>
                    Ready to Get Started?
                </h2>

                <p>
                    Whether you're looking for your next opportunity
                    or searching for the right talent, HireSprout
                    makes recruitment simple and accessible.
                </p>

            </div>


            <div className="ready-buttons">

                <button className="ready-btn employer-btn">
                    <i className="bi bi-briefcase-fill"></i>
                    I'm an Employer
                </button>

                <button className="ready-btn seeker-btn">
                    <i className="bi bi-person-fill"></i>
                    I'm a Job Seeker
                </button>

            </div>

        </div>

    </div>

</section>
<Footer />
        </>

    );

}

export default Features;