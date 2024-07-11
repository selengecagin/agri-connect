import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../api/axiosInstance";
import { RootState } from "./store";

interface Payload {
  email: string;
  password: string;
}

interface UserData {
  userid: string;
  name: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
}

const initialState: UserData = {
  userid: "",
  name: "",
  email: "",
  token: "",
  isLoggedIn: false,
};

export const sendLoginInfo: any = createAsyncThunk(
  "post/user",
  async (payload: Payload): Promise<any> => {
    const response: AxiosResponse | undefined = await axiosInstance.post(
      "users/signin",
      payload
    );
    localStorage.setItem("token", response?.data?.token);
    localStorage.setItem("userid", response?.data?.userid);

    console.log(response);
    return response?.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserData, action: PayloadAction<UserData>): UserData => {
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        token: action.payload.token,
        isLoggedIn: false,
        userid: action.payload.userid,
      };
    },
  },

  extraReducers(builder) {
    builder.addCase(sendLoginInfo.fulfilled, (state, action: any) => {
      return {
        ...state,
        userid: action.payload.userid,
        email: action.payload.email,
        name: action.payload.name,
        token: action.payload.token,
        isLoggedIn: true,
      };
    });
  },
});

export const selectToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
export type { UserData };
