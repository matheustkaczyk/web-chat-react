import ISelect from "./select.interface";

const Select = ({ label, handleChange, options, id }: ISelect) => {
  return(
    <label htmlFor={id}>
      {label}
      <select id={id} onChange={(e) => handleChange(e)}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default Select;
