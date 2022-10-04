const Button = ({text, type, handleClick}) => {
  return <button type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>{text}</button>
}

export default Button