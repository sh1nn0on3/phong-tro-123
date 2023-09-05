import { useState } from "react";
import { Button, Input } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { LoginProps } from "../../../type/login/auth";
import { useDispatch } from "react-redux";
import { loginActions } from "../../../store/auth/authActions";
import { validateLogin } from "./Validate";
import { initialStateType } from "../../../type/store/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setisError] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();
  const dataAuth: initialStateType = useSelector(
    (state: RootState) => state.auth
  );
  console.log(dataAuth);

  const [data, setData] = useState<LoginProps>({
    phone: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      validateLogin({ data, setisError, setMessage, setLoading });
      await dispatch(loginActions(data) as any);
      setTimeout(() => {
        setLoading(false);
        if (dataAuth.error === 0) {
          navigate("/");
        } else {
          setisError(true);
          setMessage(dataAuth.user);
        }
      }, 0);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white max-w-[600px] w-[90%] p-[30px] pb-[100px] rounded-md shadow-sm ">
      <h3 className="font-semibold text-2xl mb-3">Đăng Nhập</h3>
      <div className="w-full flex flex-col gap-3">
        <Input
          label={"Số điện thoại"}
          id={"phone"}
          type="text"
          placeholder={"Nhập số điện thoại ..."}
          value={data.phone}
          setValue={setData}
        />
        <Input
          label={"Mật khẩu"}
          id={"password"}
          type="password"
          placeholder={"Nhập Mật khẩu ..."}
          value={data.password}
          setValue={setData}
        />
        {isError && (
          <div className="text-center mt-1 text-[18px] text-red-500 font-semibold">
            {message}
          </div>
        )}
        <Button
          textColor="text-white mt-4"
          bgColor="bg-secondary1"
          icon={null}
          text={"Đăng nhập"}
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        <>
          <small className="text-[blue] hover:text-[red] cursor-pointer ">
            Bạn đã quên mật khẩu
          </small>
          <Link
            to={"/register"}
            className="text-[blue] hover:text-[red] cursor-pointer"
          >
            Tạo tài khoản mới
          </Link>
        </>
      </div>
    </div>
  );
};

export default Login;
