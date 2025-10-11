import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

export default function UserInput({ 
    general,
    setGeneral, 
    education, 
    setEducation, 
    experience, 
    setExperience 
}) {
    return (
        <article>
            <General data={general} setData={setGeneral}>General</General>
            <Education data={education} setData={setEducation}>Education</Education>
            <Experience data={experience} setData={setExperience}>Experience</Experience>
        </article>
    );
}