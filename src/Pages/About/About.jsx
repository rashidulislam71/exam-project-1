import React from "react";
import "../PagesCSS/Pages.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="header">
        <h1>About Our Job Portal</h1>
      </div>

      <div className="content">
        <p className="title">Your gateway to a successful career journey ::__::</p>
   
        <p>
          Welcome to our job portal, your gateway to an array of exciting career
          opportunities. Our platform serves as a comprehensive hub connecting
          talented individuals with diverse job listings across various
          industries. With a user-centric approach, we aim to streamline the job
          search process, ensuring both job seekers and employers find their
          perfect match effortlessly.
           <br />
           <br />
          At our job portal, we prioritize creating
          an intuitive and efficient user experience. Job seekers can explore a
          multitude of roles tailored to their preferences, empowering them to
          discover opportunities aligned with their skills and aspirations. We
          leverage advanced algorithms to provide personalized job
          recommendations based on individual profiles and career preferences,
          enhancing the chances of finding that ideal career fit. <br />
<br />
          For employers,
          our platform offers access to a pool of qualified candidates,
          facilitating seamless recruitment processes. We cater to the unique
          needs of businesses by providing tools and resources to identify,
          connect with, and onboard top talent, contributing to their
          organizational growth and success.
          <br />
     
          Join us on this journey towards
          building careers and fostering partnerships that shape the future
          workforce.
        </p>
      </div>

      <div className="features">
        <h2>Why Choose Our Job Portal?</h2>
        <ul>
          <li>
            Explore a diverse range of job listings tailored to your
            preferences.
          </li>
          <li>
            User-friendly interface for a smooth and efficient job search
            experience.
          </li>
          <li>
            Receive personalized job recommendations based on your profile and
            preferences.
          </li>
          <li>
            Connect with top employers and access valuable career resources.
          </li>
        </ul>
      </div>

        <h2 className="meetOutTeam">Meet Our Team</h2>
      <div className="team">
        <div className="team-members">
          <div className="team-member">
            <img src="https://placehold.co/150x150" alt="Rashidul" />
            <div className="member-info">
              <h3>RASHIDUL ISLAM RASHED</h3>
              <p>Founder & CEO</p>
              <p>
                With a vision to revolutionize the job market, John leads our
                team with passion and determination.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://placehold.co/150x150" alt="Kausar" />
            <div className="member-info">
              <h3>KAUSAR AHAMED</h3>
              <p>Founder & CEO</p>
              <p>
                With a vision to revolutionize the job market, John leads our
                team with passion and determination.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://placehold.co/150x150" alt="Rashed" />
            <div className="member-info">
              <h3>RASHED ABDULLAH</h3>
              <p>Founder & CEO</p>
              <p>
                With a vision to revolutionize the job market, John leads our
                team with passion and determination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
