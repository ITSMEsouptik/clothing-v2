import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = ({ children, buttonType, ...otherInformation }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherInformation}
    >
      {children}
    </button>
  );
};

export default Button;
