import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SignUpInDTO } from "../dto/sign-up-in";

interface AuthState {
  user: SignUpInDTO["user"] | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SignUpInDTO["user"] | null>) => {
      if (action.payload === null) {
        state.user = null;
      }
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
