import { memo } from "react";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, placeholder, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="outline-none bg-[#e8f0fe] p-2 rounded-md"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(Input);
