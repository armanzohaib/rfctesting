import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  access_token: string | null;
  userData: { [key: string]: any } | null;
}

const initialState: UserState = {
  access_token: null,
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUpdate: (state, action) => {
      state.access_token = action.payload.access_token;
      state.userData = action.payload.user;
    },
    resetAuthSlice: (state, action) => {
      state.access_token = null;
      state.userData = null;
    },
    updateStartMining: (state) => {
      if (state.userData) {
        state.userData.startMining = true;
      }
    },
  },
});

export const selectUser = (state: any) => state.user;
export const selectUserData = (state: any) => state.user.userData;
export const selectAccessToken = (state: any) => state.user.access_token;

export const { loginUpdate, resetAuthSlice, updateStartMining } =
  userSlice.actions;

export default userSlice.reducer;
