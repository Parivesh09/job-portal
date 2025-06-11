import React, { useEffect, useState } from "react";
import FilterJobs from "./FilterJobs";
import SingleJobCard from "./SingleJobCard";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="flex gap-8 mt-5">
      <div className="min-w-[20%]">
        {/* job filter component  */}
        <FilterJobs />
      </div>

      <div className="grid grid-cols-1 gap-5 overflow-y-scroll max-h-[85vh] w-full p-2">
        {/* single job profile card */}
        {allJobs.length > 0 ? (
          allJobs.map((job) => (
            <SingleJobCard key={job._id} job={job} />
          ))
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-600">No Jobs Found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your filters or check back later for new opportunities</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
