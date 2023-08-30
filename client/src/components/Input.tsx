import { memo } from "react";
import { RegisterProps } from "../type/auth";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: any;
  type: string;
}

const Input = ({
  id,
  type,
  label,
  placeholder,
  value,
  setValue,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="outline-none bg-[#e8f0fe] p-2 rounded-md"
        onChange={(e) =>
          setValue((prev: RegisterProps) => ({ ...prev, [id]: e.target.value }))
        }
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(Input);
