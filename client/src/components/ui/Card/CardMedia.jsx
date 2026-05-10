export default function CardMedia({ children, caption, className = "" }) {
    return (
        <figure className={`project-figure ${className}`.trim()}>
            {children}
            {caption ? <figcaption>{caption}</figcaption> : null}
        </figure>
    );
}
