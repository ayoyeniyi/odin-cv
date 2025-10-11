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
            <General data={general} setData={setGeneral} />
            <Education data={education} setData={setEducation} />
            <Experience data={experience} setData={setExperience} />
        </article>
    );
}