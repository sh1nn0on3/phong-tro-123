import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { path } from "../../../ultils/constant";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/auth/authSlice";
import React, { useEffect, useState } from "react";

const Header: any = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogined, setIsLogined] = useState<boolean>();
  // const token = localStorage.getItem("token");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const checkLoginStatus = async () => {
      if (token) {
        setIsLogined(true);
      } else {
        setIsLogined(false);
      }
    };
    checkLoginStatus();
  }, [token]);

  return (
    <div className="max-w-[1100px] w-full border  flex items-center justify-between">
      <img
        src="https://phongtro123.com/images/logo-phongtro.svg   "
        className="w-[240px] h-[70px] object-contain cursor-pointer"
        alt="#"
        onClick={() => {
          navigate(path.HOME);
        }}
      />
      <div className="flex gap-3 items-center">
        <small>Phongtro123.com xin chào</small>
        {!isLogined && (
          <>
            <Button
              text={"Đăng nhập"}
              textColor="text-white"
              bgColor="bg-[#3961fb]"
              icon=""
              onClick={() => {
                navigate(path.LOGIN);
              }}
            />
            <Button
              text={"Đăng Ký"}
              textColor="text-white"
              bgColor="bg-[#3961fb]"
              icon=""
              onClick={() => {
                navigate(path.REGISTER);
              }}
            />
          </>
        )}
        {isLogined && (
          <Button
            text={"Đăng xuất"}
            textColor="text-white"
            bgColor="bg-[#3961fb]"
            icon=""
            onClick={() => {
              dispatch(logOut());
              setIsLogined(false);
            }}
          />
        )}
        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgColor="bg-red-500"
          icon={<i className="fa-solid fa-arrow-right"></i>}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default React.memo(Header);
