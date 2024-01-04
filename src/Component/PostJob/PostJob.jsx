

import "../JobsComponent/JobApply/JobApply.css"
import "./PostJob.css";
import "../../Component/MainLayout/Common/Common.css"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const { addJob, updateJob, editingJob, setEditingJob } =
    useContext(GlobalContext);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingJob) {
      setJobPost(editingJob);
      setIsEditing(true);
    }
  }, [editingJob]);

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
      if (isEditing) {
        await updateJob(jobPost);
        setEditingJob(null);
      } else {
        await addJob(jobPost);
      }

      setJobPost({
        companyName: "",
        title: "",
        position: "",
        description: "",
        companyLogo: "",
        responsibilities: ""
      });
      setIsEditing(false);
      navigate("/jobs");
      toast.success(
        isEditing ? "Job updated successfully!" : "Job posted successfully!"
      );
    } catch (error) {
      console.error("Error posting/updating job:", error);
      toast.error(`Failed to ${isEditing ? "update" : "post"} job.`);
    }
  };

  // Clear input filed
  const cancelJobPost = () => {
    setJobPost({
      companyName: "",
      title: "",
      position: "",
      description: "",
      companyLogo: "",
      responsibilities: ""
    });
    setIsEditing(false);
    setEditingJob(null);
  };

  return (
    <div className="jobPostParent">
      <div className="job-post-container">
        <h1 className="job-post-title">
          {isEditing ? "Edit your Job" : "Post Your Jobs"}
        </h1>
        <form onSubmit={handleSubmit} className="job-post-form">
          <label className="job-post-label">
            <label className="job-post-label">
              Logo url:
              <input
                type="text"
                name="companyLogo"
                value="https://picsum.photos/200"
                onChange={handleChange}
                className="job-post-input"
              />
            </label>
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
              {isEditing ? "Update Job" : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostJob;
