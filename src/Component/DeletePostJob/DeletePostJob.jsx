import axios from "axios";



const DeletePostJob = ({ jobId, onDeleteSuccess, onDeleteError }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${jobId}`);
      onDeleteSuccess(jobId);
    } catch (error) {
      console.error(`Job post ${jobId} deletion failed:`, error);
      onDeleteError();
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeletePostJob;
