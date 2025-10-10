import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

export default function UserInput({ data, setData }) {
    return (
        <article>
            <General data={data} setData={setData}>General</General>
            <Education data={data} setData={setData}>Education</Education>
            <Experience data={data} setData={setData}>Experience</Experience>
        </article>
    );
}