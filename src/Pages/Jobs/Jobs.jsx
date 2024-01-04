import "../../Pages/PagesCSS/Pages.css";
import "../../Component/MainLayout/Common/Common.css";
import "../../Component/JobsComponent/JobApply/JobApply.css";
import "../../Component/JobsComponent/JobsDetails/JobsDetails.css";
import "../../Component/PostJob/PostJob.css";
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
        toast.success(`${postId} deleted successfully`);
      } catch (error) {
        toast.error(`Job post ${postId} deletion failed:`, error);
      }
    
    
  };

  return (
    <div>
      <ToastContainer />
      <div className="jobsSection">
        <div className="postAndAppliedJob flex">
          <div className="post-jobBtn flex">
            <Link to="/postJobs">
              <h1>Post Your Jobs</h1>
            </Link>
          </div>
          <div className="title">
            <h1>Jobs Haut! Find Your jobs</h1>
          </div>
          <div className="yourAppliedJobs flex">
            <Link to="/appliedJob">
              <h1>Your Applied Jobs </h1>
            </Link>
          </div>
        </div>
        <ul className="jobCardInfo">
          {jobData.map((value) => (
            <div key={value.id}>
              <JobsDetails deleteJobPost={deleteJobPost} data={value} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
