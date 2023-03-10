import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { User } from "types/alltypes";

interface authState {
  token: string | null;
  user: User | null;
}

const initialState: authState = {
  token: null,
  user: null,
};
const authSlice:any= createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.token = accessToken;
      state.user = user;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const selectCurrentToken = (state: RootState) => state.auth.token;
