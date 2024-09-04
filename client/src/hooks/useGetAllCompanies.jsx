import Base_url from "@/Base_url";
import { setCompaniesBulk } from "@/redux/companySlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      const response = await axios.get(`${Base_url}/company/getAll`, {
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
