import Loading from "./../../Component/Loading/Loading";
import { Link } from "react-router-dom";
import "../../Pages/PagesCSS/Pages.css";
import JobsDetails from "../../Component/JobsComponent/JobsDetails/JobsDetails";
import postJobImage from "../../assets/images/post job.jpg";
import { useContext,  } from "react";
import axios from "axios";
import { GlobalContext } from "../../Component/GlobalContext/GlobalContext";
import JobApply from "../../Component/JobsComponent/JobApply/JobApply";





const Jobs = () => {

  const {jobData, setJobData} = useContext(GlobalContext)
 
  if (!jobData) {
    return <Loading />;
  }

  // delete
  const deleteJobPost = async (postId) => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${postId}`);
      const updatedJobData = jobData.filter(job => job.id !== postId);
      setJobData(updatedJobData);
      console.log(`${postId} deleted successfully`);
    } catch (error) {
      console.error(`Job post ${postId} deletion failed:`, error);
    }
  };

  return (
    <div>
      <div className="jobsSection">
        <div className="post-jobBtn">
          <Link to="/postJobs">
            <img src={postJobImage} alt="" />
          </Link>
        </div>

        <ul className="jobCardInfo flex">
          {jobData.map((value) => (
            <div key={value.id}>
              <JobsDetails deleteJobPost={deleteJobPost} data={value}  />
            </div>
          ))}
        </ul>
      </div>
{/*       
        {jobData.map((value) => (
          console.log(value)
        ))} */}
      
    </div>
  );
};

export default Jobs;