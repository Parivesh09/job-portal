import Base_url from "@/Base_url";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetCompanyById = (id) => {
  const [company, setCompany] = useState({});
  useEffect(() => {
    const fetchJob = async () => {
      const response = await axios.get(
        `${Base_url}/company/get/${id}`,
        {
          withCredentials: true,
        }
      );

      if (response?.data?.success) {
        setCompany(response.data.company);
      }
    };
    fetchJob();
  }, []);
  return { company };
};

export default useGetCompanyById;
