import React, { useState }from "react";
import "../styles/HowITWorks.css";
import Footer from "../inc/Footer";




const timelineSteps = [
  {
    id: 1,
    title: "Create Vacancy",
    icon: "bi-file-earmark-plus",
    role: "employer",
    description:
      "The employer creates a new job vacancy by entering the job title, description, requirements, location and closing date."
  },
  {
    id: 2,
    title: "Publish Vacancy",
    icon: "bi-megaphone",
    role: "employer",
    description:
      "Once completed, the vacancy is published and becomes visible to job seekers."
  },
  {
    id: 3,
    title: "Browse Jobs",
    icon: "bi-search",
    role: "seeker",
    description:
      "Job seekers browse available vacancies to find opportunities that match their skills and interests."
  },
  {
    id: 4,
    title: "Apply Online",
    icon: "bi-send-check",
    role: "seeker",
    description:
      "Applicants complete the online application form and upload their CV and supporting documents."
  },
  {
    id: 5,
    title: "Review Applications",
    icon: "bi-person-check",
    role: "employer",
    description:
      "The employer reviews submitted applications and compares candidates before making a decision."
  },
  {
    id: 6,
    title: "Accept / Reject",
    icon: "bi-check2-circle",
    role: "employer",
    description:
      "The employer accepts or rejects applicants and updates the status of each application."
  },
  {
    id: 7,
    title: "Email Notification",
    icon: "bi-envelope-check",
    role: "seeker",
    description:
      "Applicants receive an email notification informing them of the outcome of their application."
  }
];

function HowITWorks() {

const [activeStep, setActiveStep] = useState(null);

    return (
        <>

            {/* Header */}

            <section className="how-header">

                <div className="container">

                    <div className="text-center">

                    

                        <h1 className="about-title">
                            Recruitment Process
                        </h1>

                        <p className="about-subtitle">
                            Discover how HireSprout connects employers and
                            job seekers through a simple, secure and efficient
                            recruitment process.
                        </p>

                    </div>

                </div>

            </section>


            {/* Timeline */}

            <section className="timeline-section">

                <div className="container">

                    <div className="timeline">

                      

                        {timelineSteps.map((step) => (

                          <div
                             key={step.id}
                             className="timeline-item"
                          onClick={() =>
                        setActiveStep(
                          activeStep === step.id ? null : step.id
                      )
                     }
                       >

        <div className={`timeline-circle ${step.role}`}>

            <span>
                {String(step.id).padStart(2, "0")}
            </span>

        </div>

        <div className="timeline-content">

            <div className="timeline-title">

                  <i className={`bi ${step.icon} ${step.role}`}></i>

                  <h5>{step.title}</h5>

                </div>

            {activeStep === step.id && (

                <div className="timeline-description">

                    <p>{step.description}</p>


                </div>

            )}

        </div>

    </div>

))}
                            </div>

                        </div>

                    

               

            </section>

        


       <Footer />
       </>
    );
}


export default HowITWorks;