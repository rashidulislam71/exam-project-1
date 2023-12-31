import React from "react";
import useFetchData from './../../Component/useFetchData/useFetchData';
import Loading from './../../Component/Loading/Loading';


const Jobs = () => {
  
  const {data,loading, error}= useFetchData("http://localhost:9000/jobs") 

  if (!data) {
    return undefined;
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="jobsSection">
        <ul>
          {data.map((value) => (
            <div key={value.id}>
              <img src={value.logo} alt="" />
              <p>
                <span>Company Name: </span>
                {value.companyName}
            
              </p>
              <p>
                <span>Title: </span>
                {value.title}
              </p>
              <p>
                <span>Position: </span> {value.position}
              </p>
              <p>
                <span>Description: </span> {value.description}
              </p>
              </div>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Jobs;
