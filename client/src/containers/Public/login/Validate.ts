interface IValidateRegister {
  data: {
    name: string;
    phone: string;
    password: string;
  };
  setisError: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const validateRegister = ({
  data,
  setisError,
  setMessage,
}: IValidateRegister) => {
  if (!data.name || !data.phone || !data.password) {
    setisError(true);

    setMessage("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  if (data.password.length < 6) {
    setisError(true);
    setMessage("Mật khẩu phải lớn hơn 6 ký tự");
    return;
  }
  setisError(false);
};
