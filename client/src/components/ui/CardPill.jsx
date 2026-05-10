export default function CardPill({ children, className = "", as: Component = "span", ...rest }) {
    return (
        <Component className={`card-pill ${className}`.trim()} {...rest}>
            {children}
        </Component>
    );
}
