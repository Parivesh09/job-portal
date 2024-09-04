import { setAppliedJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllAppliedJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${process.env.BACKEND_BASE_URL}/jobs/applications/get/applied`,
        { withCredentials: true }
      );

      if (response.data.success) {
        dispatch(setAppliedJobs(response.data.appliedJobs));
      }
    };
    fetch();
  }, []);
};

export default useGetAllAppliedJobs;
