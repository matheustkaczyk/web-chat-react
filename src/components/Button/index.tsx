import { IButton } from "./button.interface"

const Button: React.FC<IButton> = ({
  text,
  type,
  onClick,
  disabled,
  classN,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classN}
    >
      {text}
    </button>
  )
}

export default Button