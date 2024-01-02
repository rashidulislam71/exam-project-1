// import "../../Pages/PagesCSS/Pages.css";
import "../../JobsComponent/JobsDetails/JobsDetails.css";
import Loading from "../../Loading/Loading";
import { Link, useParams } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

const JobsDetails = ({ data }) => {

  const params = useParams()

  if(!data){
    return null,
    <Loading />
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
            <button>Delete</button>
          </Link>
          <Link to="/jobs">
            <button>Favorite</button>
          </Link>

          <Link to="/jobs">
            <button>Edit</button>
          </Link>
        </div>
        <Link to={`/jobs/${id}`}>
          <button className="applyBtn">DETAILS & APPLY</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsDetails;
