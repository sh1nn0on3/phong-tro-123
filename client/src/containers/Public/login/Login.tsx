import { useState } from "react";
import { Button, Input } from "../../../components";
import { Link } from "react-router-dom";
import { LoginProps } from "../../../type/auth";
import { useDispatch } from "react-redux";
import authActions from "../../../store/auth/authActions";

const Login = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState<LoginProps>({
    phone: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      // const res: any = await apiLogin(data);
      dispatch(authActions(data) as any);
      setData({ phone: "", password: "" });
      // console.log(res.data);
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
