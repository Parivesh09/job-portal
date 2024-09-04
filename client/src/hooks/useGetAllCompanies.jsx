import { setCompaniesBulk } from "@/redux/companySlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      const response = await axios.get(`${process.env.BACKEND_BASE_URL}/company/getAll`, {
        withCredentials: true,
      });

      if (response?.data?.success) {
        dispatch(setCompaniesBulk(response.data.companies));
      }
    };
    fetchAllJobs();
  }, []);
};

export default useGetAllCompanies;
