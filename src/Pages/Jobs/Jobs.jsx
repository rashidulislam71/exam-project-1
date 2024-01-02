import Loading from "./../../Component/Loading/Loading";
import { Link, useLoaderData } from "react-router-dom";
import "../../Pages/PagesCSS/Pages.css";
import JobsDetails from "../../Component/JobsComponent/JobsDetails/JobsDetails";
import postJobImage from "../../assets/images/post job.jpg"

const Jobs = () => {
  const jobs = useLoaderData();

  if (!jobs) {
    return <Loading />;
  }

  return (
    <div>
      <div className="jobsSection">
          <div className="post-jobBtn">
        <Link to="/postJobs">
            <img src={postJobImage} alt="" />
            {/* <button>POST YOUR JOBS</button> */}
        </Link>
          </div>

        <ul className="jobCardInfo flex">
          {jobs.map((value) => (
            <div key={value.id}>
              <JobsDetails data={value} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
