import "./button.css";
// import RightArrow from "../../assets/RightArrow.png";
// eslint-disable-next-line react/prop-types
function Button({ name }) {
  return (
    <button className="register-button">
      <p>{name}</p>
      {/* <img src={RightArrow} alt="" /> */}
    </button>
  );
}

export default Button;
