import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { RiHeartsFill } from "react-icons/ri";
import { RiHeartsLine } from "react-icons/ri";

const FavoriteShow = ({ data }) => {
  const { id, title, companyName, logo, position, description } = data;
  const { favorites, isJobInFavorites, toggleFavorite,toggleApplied, setEditingJob,isJobInAppliedJob } =
    useContext(GlobalContext);

  const handleToggleFavorite = () => {
    toggleFavorite(data);
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
            <button onClick={handleToggleFavorite}>
              {isJobInFavorites(data) ? <RiHeartsFill /> : <RiHeartsLine />}
            </button>
            <Link>
            <button onClick={() => setEditingJob(data)}>Edit</button>
            </Link>
          </div>

         <div className="detailsAndApplyBtn ">

          <button onClick={() => toggleApplied(data)} className="applyBtn">
            {isJobInAppliedJob(data) ? "APPLIED"  : "APPLY NOW"}
          </button>

          <Link to={`/jobs/${id}`}>
            <button className="detailsBtn"> DETAILS </button>
          </Link>
        </div>
        </div>
    </div>
  );
};

export default FavoriteShow;
