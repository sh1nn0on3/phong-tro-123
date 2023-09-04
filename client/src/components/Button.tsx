import { ButtonType } from "../type/components";

const Button = ({ text, textColor, bgColor, icon, onClick }: ButtonType) => {
  return (
    <button
      type="button"
      className={`py-2 px-4 ${textColor} ${bgColor} outline-none rounded-md opacity-90 hover:opacity-100 transition-all`}
      onClick={onClick}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
