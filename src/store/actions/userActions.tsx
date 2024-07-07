import api from "../../api";

export const GlobalUserActions = {
  setLoginSuccess: "LOGIN_SUCCESS",
  setLoginFailure: "LOGIN_FAILURE",
  setLoginVerify: "LOGIN_VERIFY",
  setLoginExit: "LOGIN_EXIT",
};

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

export const loginUserAction = (creds, navigate) => (dispatch) => {
  localStorage.setItem("userName", creds.userName);

  api
    .post("/login", creds)
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
