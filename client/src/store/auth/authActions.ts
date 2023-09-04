import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLogin } from "../../services/auth";
import { LoginProps } from "../../type/auth";

const authActions = createAsyncThunk(
  "auth/authActions",
  async (payload: LoginProps) => {
    const res: any = await apiLogin(payload);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  }
);

export default authActions;
