import React, { useEffect, useState } from "react";
import "../PagesCSS/Pages.css";
import bannerImage from "../../assets/images/banner3.jpg";
import { Link } from "react-router-dom";
import useFetchData from './../../Component/useFetchData/useFetchData';
import Loading from './../../Component/Loading/Loading';



function Home() {

  const {data, loading, error} = useFetchData("http://localhost:9000/jobs")
  const sliceData = data.slice(0,5)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
              <Link to="/login">
                <div className="ExploreNewBtn">
                  <button>Explore Now.......</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="fetchData">
            <ul>
              {sliceData.map((value) => (
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
                  <Link to="/jobs">
                    <button>Explore All Jobs</button>
                  </Link>
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
