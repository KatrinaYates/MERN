import Card from "../ui/Card/Card.jsx";
import CardBody from "../ui/Card/CardBody.jsx";
import CardHeader from "../ui/Card/CardHeader.jsx";

/**
 * @param {{ group: { title: string, items: string[], description?: string } }} props
 */
export default function SkillsCard({ group }) {
    return (
        <Card>
            <CardHeader title={group.title} titleAs="h4" />
            <CardBody>
                {group.description ? <p>{group.description}</p> : null}
                <ul>
                    {group.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                    ))}
                </ul>
            </CardBody>
        </Card>
    );
}
