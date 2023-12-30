import React, { useEffect, useState } from "react";
import "../PagesCSS/Pages.css";
import bannerImage from "../../assets/images/banner3.jpg";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/jobs");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="homePage">
        <div className="heroSection">
          <div className="bannerInfo">
            <div className="imgDiv">
              <img src={bannerImage} alt="" />
            </div>
            <div className="bannerText">
              <h1 className="title">Find Jobs and Get Jobs....</h1>
              <div className="text">
                <p>
                  Are you ready to take the next big step in your career? Look
                  no further! Our job site is your gateway to a world of
                  exciting opportunities and fulfilling careers.
                </p>
              </div>
              <Link to= "/signin">
                <div className="ExploreNewBtn">
                  <button>Explore Now...</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="fetchData">
            <ul>
              {data.map((value) => (
                <div key={value.id} className="data">
                  <li>
                    <span>Title: </span>
                    {value.title}
                  </li>
                  <li>
                    <span>Company Name: </span>
                    {value.companyName}
                  </li>
                  <li>
                    <span>Logo: </span>
                    {<img src={value.logo} alt="" />}{" "}
                  </li>
                  <li>
                    <span>Position: </span>
                    {value.position}
                  </li>
                  <button>Explore All Jobs</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
