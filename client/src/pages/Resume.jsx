import resumeData from "../data/resume.json";
import skillsData from "../data/skills.json";
import IntroCard from "../components/cards/IntroCard.jsx";
import ResumeCard from "../components/cards/ResumeCard.jsx";
import EducationTableCard from "../components/cards/EducationTableCard.jsx";
import SkillsCard from "../components/cards/SkillsCard.jsx";

export default function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>

            <IntroCard intro={resumeData.intro} />

            <section>
                <h3>Education</h3>
                <EducationTableCard rows={resumeData.education} />
            </section>

            <section>
                <h3>Work Experience</h3>
                <div className="grid grid-two">
                    {resumeData.experience.map((job) => (
                        <ResumeCard key={`${job.company}-${job.title}`} job={job} />
                    ))}
                </div>
            </section>

            <section id="skills">
                <h3>Technical Skills</h3>
                <div className="grid grid-four">
                    {skillsData.technicalSkills.map((group) => (
                        <SkillsCard key={group.title} group={group} />
                    ))}
                </div>
            </section>

            <section>
                <h3>Leadership &amp; Professional Strengths</h3>
                <div className="grid grid-four">
                    {skillsData.leadershipStrengths.map((group) => (
                        <SkillsCard key={group.title} group={group} />
                    ))}
                </div>
            </section>
        </section>
    );
}
