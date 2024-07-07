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
