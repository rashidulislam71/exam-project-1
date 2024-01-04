

import "../JobApply/JobApply.css"
import "../JobsDetails/JobsDetails.css";
import "../../MainLayout/Common/Common.css"


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { RiHeartsFill } from "react-icons/ri";
import { RiHeartsLine } from "react-icons/ri";

const JobsDetails = ({ data, deleteJobPost }) => {
  const { id, title, companyName, logo, position, description } = data;
  const { isJobInFavorites, toggleFavorite, setEditingJob, toggleApplied, isJobInAppliedJob } =
    useContext(GlobalContext);

  const editHandling = (data) => {
    setEditingJob(data);
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <div className="jobCard">
        <span className="cImage">
          {<img src={logo} alt="" />}
          {companyName}
        </span>
        <hr />
        <p>
          <span>Title: </span>
          {title}
        </p>
        <p>
          <span>Position: </span>
          {position}
        </p>
        <p>
          <span>Description: </span>
          {description}
        </p>

        <div className="jobBtn flex">
          <Link to="/jobs">
            <button onClick={() => deleteJobPost(id)}>Delete</button>
          </Link>
          <button onClick={() => toggleFavorite(data)}>
            {isJobInFavorites(data) ? <RiHeartsFill /> : <RiHeartsLine />}
          </button>
          <Link to="/postJobs">
            <button onClick={() => editHandling(data)}>Edit</button>
          </Link>
        </div>
        <div className="detailsAndApplyBtn ">

          <button onClick={() => toggleApplied(data)} className="applyBtn">
            {isJobInAppliedJob(data) ? "APPLIED" : "APPLY NOW"}
          </button>

          <Link to={`/jobs/${id}`}>
            <button className="detailsBtn"> DETAILS </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
