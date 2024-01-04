import React from "react";
import "../PagesCSS/Pages.css";
import "./Contact.css"
const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have any questions about job opportunities or our services? Reach
            out to us!
          </p>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
             
              <input
                type="text"
                id="ConName"
                name="name"
                placeholder="Your Name"
                autoFocus
                required
              />
            </div>
            <div className="form-group">
              
              <input
                type="email"
                id="ConEmail"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
             <label htmlFor="message">Message!</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please explain your message!"
                required
              ></textarea>
            </div >
            <div className="sendBtn">
            <button type="submit">Send Massage</button>
            </div>
            
          </form>
        </div>

        <div className="jobs-paragraph">
          <h2>Explore Exciting Job Opportunities</h2>
          <div className="contactContent">
          <p>
            Discover your dream job on our platform! Whether you're a seasoned
            professional or just starting your career journey, we offer a
            diverse range of job listings across various industries. Our mission
            is to connect talented individuals with rewarding career
            opportunities. Your next job might be just a click away. Join us in
            shaping your future and advancing your professional growth.
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
