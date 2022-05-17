const DropDown = ({ label, options, onChangeHandler }) => {
  const optiosnArray = Object.values(options)
  const firstOption = optiosnArray.shift();

  return (      
    <p>
      <label>{ label }</label><br/>
      <select onChange={onChangeHandler}>
        <option defaultValue={firstOption} value={firstOption}>{firstOption}</option>
        {
          optiosnArray.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>  
          ))
        }
      </select>
    </p>)
}

export default DropDown