import aboutData from "../data/about.json";
import AboutCard from "../components/cards/AboutCard.jsx";

export default function About() {
    return (
        <section id="about">
            <h2>About Me</h2>

            <section>
                <AboutCard data={aboutData} />
            </section>
        </section>
    );
}
