import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const authInfo = useContext(AuthContext);
  // console.log("from axios", authInfo?.logoutUser);
  // const {logoutUser} = useContext(AuthContext)
  // console.log("logoutUser", logoutUser);

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          authInfo?.logoutUser().then(() => {});
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;