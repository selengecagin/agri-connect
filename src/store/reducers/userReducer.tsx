import { GlobalUserActions } from "../actions/userActions";

const initialState = {
  id: null,
  name: "",
  userName: "",
  email: "",
  isLoggedIn: false,
  error: null,
};

const userReducer = (
  state = initialState,
  action: {
    type: any;
    payload: { id: any; name: any; email: any; role_id: any };
  }
) => {
  switch (action.type) {
    case GlobalUserActions.setLoginSuccess:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        isLoggedIn: true,
        error: null,
      };

    case GlobalUserActions.setLoginFailure:
      return { ...state, error: action.payload, isLoggedIn: false };

    case GlobalUserActions.setLoginVerify:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        isLoggedIn: true,
      };

    case GlobalUserActions.setLoginExit:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;