import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import SingleJobCard from "./SingleJobCard";
import Base_url from "@/Base_url";

const Browse = () => {
  const { jobSearchKeyword } = useSelector((store) => store.job);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${Base_url}/jobs/getJobs?keyword=${jobSearchKeyword}`
        );

        if (response?.data.success) {
          setJobs(response.data.jobs);
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">
        <span className="text-gray-400">Jobs based on:</span> {jobSearchKeyword}
      </h1>
      <hr className="my-2" />
      {jobs.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 my-5">
          {jobs?.map((job, index) => (
            <SingleJobCard key={index} job={job} />
          ))}
        </div>

      ) : (
        <h1 className="text-2xl font-bold w-full text-center text-red-700">No Jobs Found for {jobSearchKeyword}</h1>
      )}
    </div>
  );
};

export default Browse;
