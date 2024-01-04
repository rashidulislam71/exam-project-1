
import "../../MainLayout/Common/Common.css"
import "../AppliedJob/AppliedJob.css"
import "../ShowAppliedJob/ShowAppliedJob.css"
import "../../JobsComponent/JobApply/JobApply.css"
import "../../JobsComponent/JobsDetails/JobsDetails.css"

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const FavoriteShow = ({ data }) => {
  const { id, title, companyName, logo, position, description } = data;
  const { toggleApplied, isJobInAppliedJob } = useContext(GlobalContext);

  const handleToggleApplied = () => {
    toggleApplied(data);
  };

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
          <button onClick={handleToggleApplied} className="removeApply" style={{justifyContent: "center"}} >
            {isJobInAppliedJob(data) ? "REMOVE APPLY" : "APPLY NOW" }
          </button>
        </div>

        <div className="detailsAndApplyBtn ">
          <Link to={`/jobs/${id}`}>
            <button className="detailsBtn"> DETAILS </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoriteShow;
