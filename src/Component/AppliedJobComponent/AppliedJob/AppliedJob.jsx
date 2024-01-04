

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
    <div>
      <div className="favoriteSection">
        <div>
          <ul className="jobCardInfo">
            {appliedJob.length === 0 ? (
              <h1 style={{textAlign: "center", height: "90vh" }}>Empty</h1>
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
