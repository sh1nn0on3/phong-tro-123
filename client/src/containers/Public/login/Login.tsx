import { useState } from "react";
import { Button, Input } from "../../../components";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm ">
      <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-3">
        <Input
          label={"Số điện thoại"}
          id={"phone"}
          placeholder={"Nhập số điện thoại ..."}
          value={""}
          onChange={() => {}}
        />
        <Input
          label={"Mật khẩu"}
          id={"password"}
          placeholder={"Nhập Mật khẩu ..."}
          value={""}
          onChange={() => {}}
        />
        <Button
          onClick={() => {}}
          textColor="text-white mt-4"
          bgColor="bg-secondary1"
          icon={null}
          text={"Đăng nhập"}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        <small className="text-[blue] hover:text-[red] cursor-pointer ">
          Bạn đã quên mật khẩu
        </small>
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo tài khoản mới
        </small>
      </div>
    </div>
  );
};

export default Login;
