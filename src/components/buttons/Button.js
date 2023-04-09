import "./Button.css";

const BUTTON_TYPE_CLASSES = {
    secondary: "secondary",
    primary: "primary"
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;