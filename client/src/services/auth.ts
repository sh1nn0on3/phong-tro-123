import axiosConfig from "../axiosConfig";
import { LoginProps, RegisterProps } from "../type/auth";

export const apiRegister = async (data: RegisterProps) => {
  try {
    const response = await axiosConfig.post("/api/v1/auth/register", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const apiLogin = async (data: LoginProps) => {
  try {
    const response = await axiosConfig.post("/api/v1/auth/login", data);
    return response;
  } catch (error) {
    return error;
  }
};
