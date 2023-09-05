// type
type ShareUserType = {
  data: {
    phone: string;
    password: string;
  };
  setisError: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setLoading: any;
};

interface IValidateRegister extends ShareUserType {
  data: {
    name: string;
    phone: string;
    password: string;
  };
}

interface IValidateLogin extends ShareUserType {}

// export
export const validateRegister = ({
  data,
  setisError,
  setMessage,
  setLoading,
}: IValidateRegister) => {
  if (!data.name || !data.phone || !data.password) {
    setisError(true);
    setLoading(false);
    setMessage("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  if (data.password.length < 3) {
    setisError(true);
    setLoading(false);
    setMessage("Mật khẩu phải lớn hơn 3 ký tự");
    return;
  }
  setisError(false);
};

export const validateLogin = ({
  data,
  setisError,
  setMessage,
}: IValidateLogin) => {
  if (!data.phone || !data.password) {
    setisError(true);

    setMessage("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  if (data.password.length < 3) {
    setisError(true);
    setMessage("Mật khẩu phải lớn hơn 3 ký tự");
    return;
  }
  setisError(false);
};
