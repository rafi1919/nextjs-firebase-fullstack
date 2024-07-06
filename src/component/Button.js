const Button = ({ type = "button", text, onClick }) => {
    return (
      <button onClick={onClick} type={type}>
        {text}
      </button>
    );
  };
  
  export default Button;