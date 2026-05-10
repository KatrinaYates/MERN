import Card from "../ui/Card/Card.jsx";
import CardBody from "../ui/Card/CardBody.jsx";
import CardHeader from "../ui/Card/CardHeader.jsx";

/**
 * Page intro block: eyebrow, title (h3), and description paragraph.
 * @param {{ intro: { eyebrow: string, title: string, description: string } }} props
 */
export default function IntroCard({ intro }) {
    return (
        <section>
            <Card>
                <CardHeader eyebrow={intro.eyebrow} title={intro.title} titleAs="h3" />
                <CardBody>
                    <p>{intro.description}</p>
                </CardBody>
            </Card>
        </section>
    );
}
