

import { useLoaderData, useNavigate } from "react-router-dom";
import "./JobApply.css";


const JobApply = () => {

    const navigate = useNavigate()
    
    const goBackHandling = ()=>{
        navigate(-1)
    }

  const {
    description,
    logo,
    position,
    title,
    companyName,
    requirements,
    responsibilities,
    location,
    salaryPerMonth,
  } = useLoaderData();

  return (
    <div>
      <div className="job-details-container flex">
        <div className="job-details">
          <div className="header flex">
            <img src={logo} alt={companyName} className="company-logo" />
            <div className="company-info">
              <h1 className="companyNam">{companyName}</h1>
              <h2 className="companyTitle">{title}</h2>
            </div>
          </div>
          <div className="description">
            <strong>Position:</strong>
            <h2>{position}</h2>
            <p>{description}</p>
          </div>
          <div className="extra-details">
            <p>
              <strong>Responsibilities:</strong> {responsibilities}
            </p>
            <p>
              <strong>Requirements:</strong> {requirements}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Salary Per Month:</strong> {salaryPerMonth}
            </p>
          </div>
          <div className="btn flex">
            <button onClick={goBackHandling} className="backBtn">Go Back</button>
            <button className="applyBtn">APPLY NOW</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default JobApply;
