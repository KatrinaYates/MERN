import Button from "./Button.jsx";

/**
 * Button that toggles visibility of a controlled panel
 */
export default function ExpandToggle({
    controlsId,
    expanded,
    onToggle,
    expandLabel = "Show description",
    collapseLabel = "Hide description",
    className = "",
}) {
    return (
        <Button
            type="button"
            className={`expand-toggle ${className}`.trim()}
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={controlsId}
        >
            {expanded ? collapseLabel : expandLabel}
        </Button>
    );
}
