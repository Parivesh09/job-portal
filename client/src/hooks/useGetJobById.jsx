import { useState, useEffect } from "react";
import axios from "axios";
import Base_url from "@/Base_url";

const useGetJobById = (jobId) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `${Base_url}/jobs/get/${jobId}`,
          { withCredentials: true }
        );

        if (response.data.success) {
          setJob(response.data.job);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchJob();
  }, [jobId]);

  return job;
};

export default useGetJobById;
