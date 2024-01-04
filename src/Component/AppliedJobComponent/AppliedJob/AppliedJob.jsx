
import "./AppliedJob.css"

import React, { useContext } from "react";
import ShowAppliedJob from "../ShowAppliedJob/ShowAppliedJob";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import Loading from "../../Loading/Loading";

const Favorite = () => {
  const { appliedJob } = useContext(GlobalContext);

  if (!appliedJob) {
    return <Loading />;
  }

  return (
    <div className=" AppliedPage">
      <div className="favoriteSection">
        <div className="jobsListCard">
          <ul className="jobCardInfo-job flex">
            {appliedJob.length === 0 ? (
              <h1 className="appliedJobNot">Empty!</h1>
            ) : (
              appliedJob.map((value) => (
                <div key={value.id}>
                  <ShowAppliedJob key={value.id} data={value} />
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
