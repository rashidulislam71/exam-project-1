
import Loading from "./../../Component/Loading/Loading";
import { Link, useLoaderData } from "react-router-dom";
import "../../Pages/PagesCSS/Pages.css";
import JobsDetails from "../../Component/JobsComponent/JobsDetails/JobsDetails";

  const Jobs = () => {
  const jobs = useLoaderData();
 
  if(!jobs){
    return <Loading />
  }

  return (
    <div>
      <div className="jobsSection">
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
