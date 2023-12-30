import React, { useEffect, useState } from "react";
import "../PagesCSS/Pages.css";
import bannarImage from "../../assets/images/bannar.jpg";

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
          <div className="title">
            <img className="banner" src={bannarImage} alt="" />
            <h2>Find Jobs and Get Jobs....</h2>
          </div>
          <div className="text">
            <p>
              Are you ready to take the next big step in your career? Look no
              further! Our job site is your gateway to a world of exciting
              opportunities and fulfilling careers.
            </p>
          </div>
          <div className="ExploreNewBtn">
            <button>Explore Now</button>
          </div>

          <div className="fetchData">
            <ul>
            {data.map((value) => (
                <div key={value.id} className="data">
                  <li><span>Title: </span>{value.title}</li>
                  <li><span>Company Name: </span>{value.companyName}</li>
                  <li><span>Logo: </span>{<img src={value.logo} alt="" />} </li>
                  <li><span>Position: </span>{value.position}</li>
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
