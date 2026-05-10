import Card from "../ui/Card/Card.jsx";

/**
 * @param {{ data: { eyebrow: string, title: string, paragraphs: string[], social: { text: string, url: string }, image: { src: string, alt: string, caption: string } } }} props
 */
export default function AboutCard({ data }) {
    return (
        <Card>
            <div className="grid grid-two">
                <div>
                    <span className="eyebrow">{data.eyebrow}</span>
                    <h3>{data.title}</h3>

                    {data.paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}

                    <p>
                        If you’d like to connect or learn more about my professional work, feel free to check out my{" "}
                        <a href={data.social.url} target="_blank" rel="noopener noreferrer">
                            {data.social.text}
                        </a>
                        .
                    </p>
                </div>

                <figure className="headshot-card">
                    <img src={data.image.src} alt={data.image.alt} />
                    <figcaption>{data.image.caption}</figcaption>
                </figure>
            </div>
        </Card>
    );
}
