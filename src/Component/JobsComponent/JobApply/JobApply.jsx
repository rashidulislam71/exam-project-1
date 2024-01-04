

import "./JobApply.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import Loading from "../../Loading/Loading";



const JobApply = () => {

  const navigate = useNavigate();

  const { jobId } = useParams();
  const { jobData, applyJob, isJobInAppliedJob, handleToggleApplied } = useContext(GlobalContext);

  const job = jobData.find((j) => j.id === parseInt(jobId));

  

  if (!job) {
    return <Loading />;
  }

  const goBackHandling = () => {
    navigate(-1);
  };

 

  return (
    <div>
      <div className="job-details-container flex">
        <div className="job-details">
          <div className="header flex">
            <img src={job.logo} alt={job.companyName} className="company-logo" />
            <div className="company-info">
              <h1 className="companyNam">{job.companyName}</h1>
              <h2 className="companyTitle">{job.title}</h2>
            </div>
          </div>
          <div className="description">
            <strong>Position:</strong>
            <h2>{job.position}</h2>
            <p>{job.description}</p>
          </div>
          <div className="extra-details">
            <p>
              <strong>Responsibilities:</strong> {job.responsibilities}
            </p>
            <p>
              <strong>Requirements:</strong> {job.requirements}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Salary Per Month:</strong> {job.salaryPerMonth}
            </p>
          </div>

          <div className="btn flex">
            <button onClick={goBackHandling} className="backBtn">
              Go Back
            </button>
            <button onClick={handleToggleApplied}>
            {isJobInAppliedJob(jobData) ? "REMOVE" : "APPLY NOW" }
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default JobApply;