

import "../../JobsComponent/JobsDetails/JobsDetails.css";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";

const JobsDetails = ({ data, deleteJobPost }) => {

  if(!data){
    return <Loading />
  };
  
  const { id, title, companyName, logo, position, description } = data;


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
            <button onClick={()=>deleteJobPost(id)}>Delete</button>
          </Link>
          <Link to="/jobs">
            <button>Favorite</button>
          </Link>

          <Link to="/jobs">
            <button>Edit</button>
          </Link>
        </div>
        <Link to={`/jobs/${id}`}>
          <button  className="applyBtn">DETAILS & APPLY</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsDetails;
