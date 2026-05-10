import nasaApod from "../../output/apiResults.json";
import ApiCard from "../components/cards/ApiCard.jsx";
import IntroCard from "../components/cards/IntroCard.jsx";
import homeData from "../data/home.json";
export default function Home() {
    return (
        <section id="home">
            <h2>Home</h2>
            <IntroCard intro={homeData.intro} />
            <section>
                <ApiCard apod={nasaApod} />
            </section>
        </section>
    );
}
