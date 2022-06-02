import ISelect from "./select.interface";

const Select = ({ label, handleChange, options }: ISelect) => {
  return(
    <label >
      {label}
      <select onChange={(e) => handleChange(e)}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default Select;
