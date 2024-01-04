import "./Jobs.css";

import Loading from "./../../Component/Loading/Loading";
import { Link } from "react-router-dom";
import JobsDetails from "../../Component/JobsComponent/JobsDetails/JobsDetails";

import { useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../Component/GlobalContext/GlobalContext";

import { ToastContainer, toast } from "react-toastify";

const Jobs = () => {
  const { jobData, setJobData } = useContext(GlobalContext);

  if (!jobData) {
    return <Loading />;
  }

  // delete
  const deleteJobPost = async (postId) => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${postId}`);
      const updatedJobData = jobData.filter((job) => job.id !== postId);
      setJobData(updatedJobData);
      toast.success(`Deleted successfully!`);
    } catch (error) {
      toast.error(`Job post ${postId} deletion failed:`, error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="jobsSection-job">
        <div className="postAndAppliedJob-job ">
          <div className="postAndAppliedBtn-job ">
            <div className="postBtn">
              <Link to="/postJobs">

                <button> Go Post Your Jobs</button>
              </Link>
            </div>

            <div className="appliedJobsBtn">
              <Link to="/appliedJob">
            
                <button>Go Your Applied Jobs </button>
              </Link>
            </div>
          </div>
          <div className="jobsHat-job">
            <h1>Jobs Hat! Find Your jobs</h1>
          </div>
        </div>
        
        <div className="jobsListCard">
        <ul className="jobCardInfo-job flex">
          {jobData.map((value) => (
            <div key={value.id}>
              <JobsDetails deleteJobPost={deleteJobPost} data={value} />
            </div>
          ))}
        </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Jobs;
