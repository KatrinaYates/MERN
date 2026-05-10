import { useId } from "react";
import { useToggle } from "../../hooks/useToggle.js";
import Card from "../ui/Card/Card.jsx";
import CardBody from "../ui/Card/CardBody.jsx";
import CardHeader from "../ui/Card/CardHeader.jsx";
import ExpandToggle from "../ui/ExpandToggle.jsx";

export default function ResumeCard({ job }) {
    const [bulletsOpen, toggleBullets] = useToggle(false);
    const panelId = useId();

    return (
        <Card className="resume-card">
            <CardHeader title={job.title} titleAs="h4" />
            <CardBody>
                <p>
                    <strong>{job.company}</strong> | {job.dates}
                </p>
                <p>{job.description}</p>
                <ExpandToggle
                    controlsId={panelId}
                    expanded={bulletsOpen}
                    onToggle={toggleBullets}
                    expandLabel="See how I contributed"
                    collapseLabel="Hide my contributions"
                />
                <div id={panelId} hidden={!bulletsOpen} className="resume-card__bullets">
                    <ul>
                        {job.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}
