/**
 * @param {object} props
 * @param {string} [props.eyebrow]
 * @param {string} [props.title]
 * @param {'h3'|'h4'} [props.titleAs='h3']
 */
export default function CardHeader({ eyebrow, title, titleAs = "h3" }) {
    const TitleTag = titleAs;

    return (
        <>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            {title ? <TitleTag>{title}</TitleTag> : null}
        </>
    );
}
