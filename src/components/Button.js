const Button = ({ type = "button", text, onClick }) => {
    return (
      <button onClick={onClick} type={type} className="bg-white rounded-lg shadow-none shadow-white hover:shadow-md hover:shadow-rose-500 py-2 px-3">
        {text}
      </button>
    );
  };
  
  export default Button;