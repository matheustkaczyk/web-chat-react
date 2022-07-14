import { IInput } from "./input.interface";

const Input: React.FC<IInput> = (props) => {
  const {
    type,
    value,
    onChange,
    placeholder,
  } = props;
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
