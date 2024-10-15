import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defining initial state
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  loggedinUser: string | null;
  responseStatusCode: number | null;
  id: number | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  loggedinUser: null,
  responseStatusCode: null,
  id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{ token: string; username: string; status: number }>
    ) {
      console.log("action.payload loginSuccess", action.payload);
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.loggedinUser = action.payload.username;
      state.responseStatusCode = action.payload.status;
    },
    authSuccess(
      state,
      action: PayloadAction<{ id: number; username: string; status: number }>
    ) {
      console.log("action.payload authSuccess", action.payload);
      state.isAuthenticated = true;
      state.id = action.payload.id,
      state.loggedinUser = action.payload.username;
      state.responseStatusCode = action.payload.status;
    },
    loginFailure(
      state,
      action: PayloadAction<{ message: string; status: number }>
    ) {
      console.log("action.payload loginFailure", action.payload);
      const { message, status } = action.payload;
      state.responseStatusCode = status;
      console.log("to utilize message later:", status);
      // state.error = action.payload;
    },
    authFailure(
      state,
      action: PayloadAction<{ message: string; status: number }>
    ) {
      console.log("action.payload authFailure", action.payload);
      const { message, status } = action.payload;
      state.responseStatusCode = status;
      console.log("to utilize message later:", status);
      // state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.loggedinUser = null;
    },
  },
});

export const { loginSuccess, loginFailure, authSuccess, authFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
