export interface ButtonType {
  text: string;
  textColor: string;
  bgColor: string;
  icon: any | null;
  onClick: () => void | any;
}

export interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: any;
  type: string;
}
