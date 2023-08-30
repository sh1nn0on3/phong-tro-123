import { Link } from "react-router-dom";
import { Button, Input } from "../../../components";
import { apiRegister } from "../../../services/auth";
import { useState } from "react";
import { RegisterProps } from "../../../type/auth";

const Register = () => {
  const [data, setData] = useState<RegisterProps>({
    name: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await apiRegister(data);
      setData({ name: "", phone: "", password: "" });
      console.log(res);
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

        <Button
          onClick={handleSubmit}
          textColor="text-white mt-4"
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
            className="text-[blue] font-[500] hover:text-red-500 transition-all"
          >
            Đăng nhập ngay
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
