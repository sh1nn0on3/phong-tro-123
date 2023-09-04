import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLogin, apiRegister } from "../../services/auth";
import { LoginProps, RegisterProps } from "../../type/login/auth";

const loginActions = createAsyncThunk(
  "auth/loginActions",
  async (payload: LoginProps) => {
    const res: any = await apiLogin(payload);
    console.log("🚀 ~ file: loginActions.ts:9 ~ res:", res);
    if (res.data.err === 0) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  }
);

const registerActions = createAsyncThunk(
  "auth/registerActions",
  async (payload: RegisterProps) => {
    const res: any = await apiRegister(payload);
    console.log("🚀 ~ file: authActions.ts:21 ~ res:", res)
    if (res.data.err === 0) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  }
);

export { loginActions, registerActions };
