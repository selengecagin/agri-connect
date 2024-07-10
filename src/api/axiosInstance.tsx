import axios, { AxiosInstance } from "axios";

type Token = string | null;

export const axiosInstanceCreator = (): AxiosInstance => {
  const token: Token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: `http://172.16.99.112:8080/api/`,
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: `http://172.16.99.112:8080/api/`,
        headers: {},
      });
};

export let axiosInstance: AxiosInstance;

export const renewAxiosInstance = (): void => {
  axiosInstance = axiosInstanceCreator();
};

renewAxiosInstance();
