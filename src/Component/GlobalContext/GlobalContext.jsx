
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import JobApply from "../JobsComponent/JobApply/JobApply";


const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {
  const [jobData, setJobData] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:9000/jobs");
      setJobData(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []); 

  const addJob = async (newJob) => {
    try {
      await axios.post("http://localhost:9000/jobs", newJob);
      fetchJobs();
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const contextValue = {
    jobData,
    setJobData,
    fetchJobs,
    addJob,
  };


  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };