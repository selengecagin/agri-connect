import { Dispatch } from "redux";
import api from "../../api";

export const GlobalUserActions = {
  setLoginSuccess: "LOGIN_SUCCESS",
  setLoginFailure: "LOGIN_FAILURE",
  setLoginVerify: "LOGIN_VERIFY",
  setLoginExit: "LOGIN_EXIT",
};

interface Credentials {
  userName: string;
  password: string;
}

interface ResponseData {
  token: string;
}

// TODO data:any check
export const loginSuccess = (data: any) => ({
  type: GlobalUserActions.setLoginSuccess,
  payload: data,
});

export const loginFailure = (data: any) => ({
  type: GlobalUserActions.setLoginFailure,
  payload: data,
});

export const loginVerify = (data: any) => ({
  type: GlobalUserActions.setLoginVerify,
  payload: data,
});

export const loginExit = () => ({
  type: GlobalUserActions.setLoginExit,
});

export const loginUserAction = (creds:Credentials, navigate: (arg0: string) => void) => (dispatch:Dispatch) => {
  localStorage.setItem("userName", creds.userName);

   api
     .post<ResponseData>("/login", creds)
     .then((res) => {
       dispatch(loginSuccess(res.data));
       localStorage.setItem("token", res.data.token);
       setTimeout(() => {
         navigate("/");
       }, 250);
     })
     .catch((err) => {
       dispatch(loginFailure(err.response.data));
     });
};

export const userAuthAction = (navigate: (arg0: number) => any) => (dispatch:Dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    api
      .post("/verify", {
        header: {
          Authorization: token,
        },
      })
      .then((res) => {
        const user = res.data.user;
        const newToken = res.data.token;

        dispatch(loginSuccess(user));

        setTimeout(() => navigate(-1), 5000);
      })
      .catch((err) => {
        console.log("Login Error: ", err);
        localStorage.removeItem("token");
        if (api.defaults.headers.common["Authorization"]) {
          delete api.defaults.headers.common["Authorization"];
        }
      });
  }
};