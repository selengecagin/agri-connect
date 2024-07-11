import { useState } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
type RequestType = "get" | "post" | "put" | "delete";

interface AxiosHookProps {
  reqType: RequestType;
  endpoint: string;
  config?: AxiosRequestConfig;
  successCallback?: () => void;
  errorCallback?: () => void;
  navPath?: string;
}

export const useAxios = ({
  reqType,
  endpoint,
  config,
  successCallback,
  errorCallback,
  navPath,
}: AxiosHookProps): [
  (payload?: any) => Promise<void>,
  boolean,
  AxiosError<any> | undefined
] => {
  const [error, setError] = useState<AxiosError<any>>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const axiosRequest = async (
    payload?: any,
  ): Promise<void> => {
    setLoading(true);
    try {
      const res = await axiosInstance[reqType](
        endpoint,
        payload ? payload : config
      );

      successCallback && successCallback();

      if (endpoint === "signup") {
        localStorage.setItem("token", res.data.token);
      }

      if (navPath) {
        navigate(navPath);
      }
      return res.data;
    } catch (err: any) {

      setError(err);
      errorCallback && errorCallback();
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return [axiosRequest, loading, error];
};
