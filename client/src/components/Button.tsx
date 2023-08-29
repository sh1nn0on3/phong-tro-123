interface BtnType {
  text: string;
  textColor: string;
  bgColor: string;
  icon: any | null;
  onClick: () => void | any;
}

const Button = ({ text, textColor, bgColor, icon, onClick }: BtnType) => {
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
