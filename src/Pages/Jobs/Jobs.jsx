import React from "react";
import useFetchData from "./../../Component/useFetchData/useFetchData";
import Loading from "./../../Component/Loading/Loading";
import { Link } from 'react-router-dom';

const Jobs = () => {
  const { data, loading, error } = useFetchData("http://localhost:9000/jobs");

  if (!data) {
    return undefined;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="jobsSection">
      <ul className="jobCardInfo flex">
              {data.map((value) => (
                <div key={value.id}>
                  <div key={value.id} className="jobCard">
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

                    <Link to="/jobs">
                      <button>Details</button>
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
      </div>
    </div>
  );
};

export default Jobs;
