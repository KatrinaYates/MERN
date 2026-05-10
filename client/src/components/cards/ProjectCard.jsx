import { useId } from "react";
import { useToggle } from "../../hooks/useToggle.js";
import Card from "../ui/Card/Card.jsx";
import CardBody from "../ui/Card/CardBody.jsx";
import CardHeader from "../ui/Card/CardHeader.jsx";
import CardMedia from "../ui/Card/CardMedia.jsx";
import CardPill from "../ui/CardPill.jsx";
import ExpandToggle from "../ui/ExpandToggle.jsx";

export default function ProjectCard({ project }) {
    const tools = project.tools ?? [];
    const [descriptionOpen, toggleDescription] = useToggle(false);
    const panelId = useId();

    return (
        <Card className="project-card">
            <CardHeader title={project.title} titleAs="h4" />
            <CardMedia caption={project.category}>
                <img src={project.image} alt={`Preview: ${project.title}`} />
            </CardMedia>
            <CardBody>
                {tools.length > 0 && (
                    <ul className="card-pill-list" aria-label="Tools and technologies">
                        {tools.map((tool) => (
                            <CardPill key={tool} as="li">
                                {tool}
                            </CardPill>
                        ))}
                    </ul>
                )}
                <ExpandToggle
                    controlsId={panelId}
                    expanded={descriptionOpen}
                    onToggle={toggleDescription}
                    expandLabel="Learn about this project"
                    collapseLabel="Hide project details"
                />
                <div id={panelId} hidden={!descriptionOpen} className="project-card__description">
                    <p>{project.description}</p>
                </div>
            </CardBody>
        </Card>
    );
}
