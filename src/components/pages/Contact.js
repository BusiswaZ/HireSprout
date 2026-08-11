import React from "react";
import "../styles/Contact.css";
function Contact(){

    return(
         <>

            {/* Contact Header */}

            <section className="contact-header">

                <div className="container">

                    <div className="text-center">


                        <h1 className="contact-title">
                            Contact Us
                        </h1>

                        <p className="contact-subtitle">
                            Have questions about HireSprout or need assistance?
                            We'd love to hear from you. Reach out using the form
                            below or through our contact information.
                        </p>

                    </div>

                </div>

            </section>

            {/* Contact Content */}

            <section className="contact-section">

                <div className="container">

                    <div className="contact-wrapper">

                        {/* Form */}

                        <div className="contact-form-container">

                           <h2>Send Us a Message</h2>

<form>

    <input
        type="text"
        placeholder="Full Name"
    />

    <input
        type="email"
        placeholder="Email Address"
    />

    <input
        type="tel"
        placeholder="Phone Number"
    />

    <input
        type="text"
        placeholder="Subject"
    />

    <textarea
        rows="6"
        placeholder="Your Message"
    ></textarea>

   <button className="contact-btn">
    Send Message
</button>

</form>

                        </div>

                        {/* Contact Info */}

                        <div className="contact-info">

                           <h2>Get in Touch</h2>

<p className="contact-info-text">
    Whether you're an employer looking for the right talent
    or a job seeker searching for new opportunities,
    we're here to help.
</p>

<div className="contact-detail">

    <div className="contact-icon">
        <i className="bi bi-telephone-fill"></i>
    </div>

    <div>
        <h5>Phone</h5>
        <p>083 474 9155</p>
    </div>

</div>

<div className="contact-detail">

    <div className="contact-icon">
        <i className="bi bi-envelope-fill"></i>
    </div>

    <div>
        <h5>Email</h5>
        <p>vhutheluresources@gmail.com</p>
    </div>

</div>

<div className="contact-detail">

    <div className="contact-icon">
        <i className="bi bi-geo-alt-fill"></i>
    </div>

    <div>
        <h5>Office</h5>
        <p>111 Outeniqua Flats, 721 Church St, Arcadia, Gauteng</p>
    </div>

</div>

<h4 className="social-heading">
    Follow Us
</h4>

<div className="contact-social">

    <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
    >
        <i className="bi bi-linkedin"></i>
    </a>

    <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
    >
        <i className="bi bi-facebook"></i>
    </a>

    <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
    >
        <i className="bi bi-instagram"></i>
    </a>

    <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
    >
        <i className="bi bi-twitter-x"></i>
    </a>

</div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}
export default Contact;