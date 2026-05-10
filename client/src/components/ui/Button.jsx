export default function Button({ children, className = "", type = "button", ...rest }) {
    return (
        <button type={type} className={`ui-button ${className}`.trim()} {...rest}>
            {children}
        </button>
    );
}
