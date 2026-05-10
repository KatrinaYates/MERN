import { useEffect, useState } from "react";
import IntroCard from "../components/cards/IntroCard.jsx";
import ProjectCard from "../components/cards/ProjectCard.jsx";

const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export default function Projects() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        fetch(`${apiBase}/api/projects`)
            .then((res) => {
                if (!res.ok) throw new Error("Request failed");
                return res.json();
            })
            .then((json) => {
                if (!cancelled) setData(json);
            })
            .catch(() => {
                if (!cancelled) setError("Could not load projects.");
            });
        return () => {
            cancelled = true;
        };
    }, []);

    if (error) {
        return (
            <section id="projects">
                <h2>Projects</h2>
                <p role="alert">{error}</p>
            </section>
        );
    }

    if (!data) {
        return (
            <section id="projects">
                <h2>Projects</h2>
                <p>Loading…</p>
            </section>
        );
    }

    return (
        <section id="projects">
            <h2>Projects</h2>
            <IntroCard intro={data.intro} />

            <section id="project-featured">
                <h3>Featured Projects</h3>
                <div className="grid grid-three">
                    {data.items.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </section>
        </section>
    );
}
