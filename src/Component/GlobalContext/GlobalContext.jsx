import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [jobData, setJobData] = useState([]);

  const [favorites, setFavorites] = useState([]);
  const [isFavorites, setIsFavorites] = useState(true);

  const [appliedJob, setAppliedJob] = useState([]);
  const [isAppliedJob, setIsAppliedJob] = useState(true);

  const [editingJob, setEditingJob] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:9000/jobs");
      setJobData(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
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
      console.error("Error adding job:", error);
    }
  };

  // Add Favorites
    const addToFavorites = (job) => {
      toast.success(setFavorites((prevFavorites) => [...prevFavorites, job]));
      setIsFavorites(false);
    };

  // Remove Favorites
  const removeFromFavorites = (job) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== job.id)
    );
    setIsFavorites(true);
    toast.error("Removed from favorites");
  };

  const isJobInFavorites = (job) => {
    return favorites.some((favorite) => favorite.id === job.id);
  };

  const toggleFavorite = (job) => {
    if (isJobInFavorites(job)) {
      removeFromFavorites(job);
    } else {
      addToFavorites(job);
    }
  };



  
  // Applied Job
    const addToApplied = (job) => {
      toast.success(setAppliedJob((prevApplied) => [...prevApplied, job]));
      setIsFavorites(true);
    };

    // Remove Favorites
    const removeFromAppliedJob = (job) => {
      setAppliedJob((prevApplied) =>
        prevApplied.filter((apply) => apply.id !== job.id)
      );
      setIsAppliedJob(true);
      toast.error("Removed from favorites");
    };
  
    const isJobInAppliedJob = (job) => {
      return appliedJob.some((apply) => apply.id === job.id);
    };
  
    const toggleApplied = (job) => {
      if (isJobInAppliedJob(job)) {
        removeFromAppliedJob(job);
      } else {
        addToApplied(job);
      }

      
    };
  
// Edit post
  const updateJob = async (updatedJob) => {
    try {
      await axios.put(`http://localhost:9000/jobs/${updatedJob.id}`, updatedJob);
      fetchJobs();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };



  const contextValue = {
    jobData,
    setJobData,
    addJob,
    
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
    isJobInFavorites,
    toggleFavorite,

    updateJob,
    editingJob,
    setEditingJob,

    
    appliedJob,
    setAppliedJob,
    addToApplied,
    removeFromAppliedJob,
    isJobInAppliedJob,
    toggleApplied,
   
  };

  return (
    <>
      <ToastContainer />
      <GlobalContext.Provider value={contextValue}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export { GlobalContext, GlobalProvider };
