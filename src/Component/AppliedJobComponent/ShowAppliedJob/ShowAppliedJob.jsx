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
      <div className="jobCard-jobD">
        <span className="cImage-jobD">
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

        <div className="jobBtn-jobD flex">
         
        </div>
          <div className="detailsAndApplyBtn-jobD ">
            <button
              onClick={() => toggleApplied(data)}
              className={isJobInAppliedJob(data) ? "linkStyle" : " applyBtn"}
            >
              {isJobInAppliedJob(data) ? "REMOVE" : "APPLY NOW"}
            </button>
            <Link to={`/jobs/${id}`}>
              <button className="detailsBtn"> DETAILS </button>
            </Link>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default FavoriteShow;
