import axios from "axios";
import "./PostJob.css";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const PostJob = () => {

  const { addJob } = useContext(GlobalContext);

  const [jobPost, setJobPost] = useState({
    companyName: "",
    title: "",
    position: "",
    description: "",
    companyLogo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobPost((prevJobPost) => ({
      ...prevJobPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addJob(jobPost); 
      setJobPost({
        companyName: "",
        title: "",
        position: "",
        description: "",
        companyLogo: "",
      });
      toast.success("Job posted successfully!");
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error("Failed to post job.");
    }
  };

  const cancelJobPost = () => {
    setJobPost({
      companyName: "",
      title: "",
      position: "",
      description: "",
      companyLogo: "",
    });
  };


 
  return (
    <div className="jobPostParent">
      <div className="job-post-container">
        <h1 className="job-post-title">Post Your Jobs</h1>
        <form onSubmit={handleSubmit} className="job-post-form">
          <label className="job-post-label">
            Company Name:
            <input
              type="text"
              name="companyName"
              value={jobPost.companyName}
              onChange={handleChange}
              className="job-post-input"
              required
            />
          </label>

          <label className="job-post-label">
            Job Title:
            <input
              type="text"
              name="title"
              value={jobPost.title}
              onChange={handleChange}
              className="job-post-input"
              required
            />
          </label>

          <label className="job-post-label">
            Position:
            <input
              type="text"
              name="position"
              value={jobPost.position}
              onChange={handleChange}
              className="job-post-input"
              required
            />
          </label>

          <label className="job-post-label">
            Logo url:
            <input
              type="text"
              name="companyLogo"
              value={jobPost.companyLogo}
              onChange={handleChange}
              className="job-post-input"
            />
          </label>

          <label className="job-post-label">
            Description:
            <textarea
              name="description"
              value={jobPost.description}
              onChange={handleChange}
              className="job-post-textarea"
              required
            />
          </label>

          <div className="job-post-buttons flex">
            <button
              type="button"
              onClick={cancelJobPost}
              className="job-post-cancel-button"
            >
              Cancel
            </button>
            <button type="submit" className="job-post-submit-button">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostJob;
