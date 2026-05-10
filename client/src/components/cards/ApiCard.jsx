import Card from "../ui/Card/Card.jsx";
import CardBody from "../ui/Card/CardBody.jsx";
import CardHeader from "../ui/Card/CardHeader.jsx";
import CardMedia from "../ui/Card/CardMedia.jsx";

/**
 * Displays NASA Astronomy Picture of the Day data (from fetched JSON).
 * @param {{ date?: string, explanation?: string, hdurl?: string, media_type?: string, title?: string, url?: string }} props.apod
 */
export default function ApiCard({ apod }) {
    if (!apod || typeof apod !== "object") {
        return null;
    }

    const { date, explanation, media_type, title, url, hdurl } = apod;
    const imageSrc = media_type === "image" ? url || hdurl : null;

    return (
        <Card className="api-card">
            <div className="grid grid-two">
                <div>
                    <CardHeader eyebrow="NASA Astronomy Picture of the Day" title={title} titleAs="h3" />
                    {imageSrc ? (
                        <CardMedia>
                            <img src={imageSrc} alt={title || "NASA"} loading="lazy" />
                        </CardMedia>
                    ) : url ? (
                        <CardMedia>
                            <p className="api-card__video-link">
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    Open today&apos;s APOD video
                                </a>
                            </p>
                        </CardMedia>
                    ) : null}
                </div>
                <CardBody>
                    {date && (
                        <p className="api-card__date">
                            <time dateTime={date}>{date}</time>
                        </p>
                    )}
                    {hdurl && media_type === "image" && url && hdurl !== url && (
                        <p className="api-card__hd">
                            <a href={hdurl} target="_blank" rel="noopener noreferrer">
                                View full-resolution image
                            </a>
                        </p>
                    )}
                    {explanation ? <p className="api-card__explanation">{explanation}</p> : null}
                </CardBody>
            </div>
        </Card>
    );
}
