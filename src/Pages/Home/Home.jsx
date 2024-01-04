import "../PagesCSS/Pages.css";
import bannerImage from "../../assets/images/banner3.jpg";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "./../../Component/Loading/Loading";
import { useEffect, useState } from "react";
import useFetchData from "./../../Component/useFetchData/useFetchData";

function Home() {
  const { data, loading, error } = useFetchData("http://localhost:9000/jobs");

  const sliceJobs = data.slice(0, 6);

  return (
    <div>
      <div className="homePage">
        <div className="heroSection">
          <div className="bannerInfo">
            <div className="imgDiv">
              <img src={bannerImage} alt="" />
            </div>
            <div className="bannerText">
              <div className="title-parent">
                <h1 className="title">
                  Find <span>Jobs</span> and Get J<span>o</span>b....
                </h1>
                <div className="text">
                  <p>
                    Are you ready to take the next big step in your career? Look
                    no further! Our job site is your gateway to a world of
                    exciting opportunities and fulfilling careers.
                  </p>
                </div>
              </div>

              <div className="ExploreNewBtn">
                <Link to="/signup">
                  <button>Explore Now.......</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="jobsSection">
          <div className="jobs flex">
            <div>
              <div className="title">
                <h1 className="bePositive">Don't be upset be positive</h1>
                <h1 className="determination">
                  {" "}
                  Navigating Your Job Hunt with Determination
                </h1>
              </div>
              <p className="motivedForJob">
                Embarking on a job search is a journey of self-discovery and
                growth. Every application, every interview, and every setback is
                a stepping stone toward your professional destination. Embrace
                challenges, refine your strategy, and stay resilient. Your
                unique skills are in demand, and the perfect opportunity awaits.
                Learn from each experience, adapt, and keep navigating the
                dynamic job market. Trust in your capabilities, believe in your
                journey and persist. Remember, every effort brings you closer to
                the fulfilling career you envision. Stay focused, and stay
                motivated, and success will be the reward for your dedication
                and determination.
              </p>
            </div>
          </div>

          <div className="fetchData">
            <div className="latestJobs">
              <h1>LATEST JOBS:</h1>
            </div>
            {!loading ? (
              <ul className="jobCardInfo flex">
                {sliceJobs.map((value) => (
                  <div key={value.id}>
                    <div className="jobCard">
                      <span className="cImage">
                        {<img src={value.logo} alt="" />}

                        {value.companyName}
                      </span>
                      <hr />
                      <p>
                        <span>Title: </span>
                        {value.title}
                      </p>
                      <p>
                        <span>Position: </span>
                        {value.position}
                      </p>
                      <p>
                        <span>Description: </span>
                        {value.description}
                      </p>

                      <Link to={`/jobs/${value.id}`}>
                        <button className="homeDetailsBtn">Details</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <Loading />
            )}

            <div className="exploreAllJobBtn">
              <Link to="/jobs">
                <button>Explore All Job........... </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
