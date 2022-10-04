const Input = ({ label, name, placeholder, type, value, handleChange, error }) => {
  return(
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name={name} id={name} type={type} placeholder={placeholder} value={value} onChange={handleChange}/>

      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}

export default Input