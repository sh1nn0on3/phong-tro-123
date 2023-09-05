import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../../../components";
import { useEffect, useState } from "react";
import { RegisterProps } from "../../../type/login/auth";
import { useDispatch } from "react-redux";
import { registerActions } from "../../../store/auth/authActions";
import { validateRegister } from "./Validate";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { initialStateType } from "../../../type/store/auth";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setisError] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();
  const dataAuth: initialStateType = useSelector(
    (state: RootState) => state.auth
  );
  const [data, setData] = useState<RegisterProps>({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setTimeout(() => {
      if (dataAuth.error === 0) {
        setLoading(false);
        navigate("/");
      } else {
        setisError(true);
        setMessage(dataAuth.user);
      }
    }, 1000);
  }, [dataAuth.error]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      validateRegister({ data, setisError, setMessage, setLoading });
      dispatch(registerActions(data) as any);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white max-w-[600px] w-[90%] p-[30px] pb-[100px] rounded-md shadow-sm ">
      <h3 className="font-semibold text-2xl mb-3">Đăng ký tài khoản</h3>
      <div className="w-full flex flex-col gap-3">
        <Input
          label={"Họ và tên"}
          type="text"
          id={"name"}
          placeholder={"Nhập họ và tên ..."}
          value={data.name}
          setValue={setData}
        />
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
          onClick={handleSubmit}
          textColor="text-white transition-all mt-2"
          bgColor="bg-secondary1"
          icon={null}
          text={"Đăng ký"}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        <small className="text-center w-full cursor-pointer ">
          Bạn đã có tài khoản ?{" "}
          <Link
            to={"/login"}
            className="text-[blue] hover:text-red-500 transition-all"
          >
            Đăng nhập ngay
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
