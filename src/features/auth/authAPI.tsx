import { AppDispatch } from "../../store/store";
import { loginSuccess, loginFailure, authSuccess, authFailure } from "./authSlice";
import { apiRequest } from "../../apis/api";

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await apiRequest("post", "/api/auth/login", { username, password });
    console.log("response::::", response);
    const { token, loggedinUserName, status } = response;

    // Dispatch login success
    dispatch(loginSuccess({token, username: loggedinUserName, status }));

    // Store token locally
    localStorage.setItem("token", token);
  } catch (error: any) {
    const { message, status } = error;
    console.log("error from API failure::", error);
    dispatch(loginFailure({message, status }));
  }
};

export const register = (name: string, email: string, password: string, role: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await apiRequest("post", "/api/auth/register", { username: name, email, password, role });
      console.log("response111::::", response);
      const { id, username, success } = response;
  
      // Dispatch login success
      dispatch(authSuccess({id, username, status: success }));
  
    } catch (error: any) {
      const { message, status } = error;
      console.log("error from API failure::", error);
      dispatch(authFailure({message, status }));
    }
  };