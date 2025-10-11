import '../styles/Education.css';

export default function Education({ setData }) {
    function handleClick(formData) {
        const school = formData.get("sch-name");
        const major = formData.get("sch-major");
        const gradDate = formData.get("grad-date");

        setData(prevData => (
            {
                ...prevData,
                school,
                major,
                gradDate
            }
        ))
    }

    return (
        <form className="education" action={handleClick}>
            <h2>Education</h2>
            <div className="sch-info">
                <div className='sch-holder'>
                    <label htmlFor="sch-name">School</label>
                    <input type="text" name="sch-name" id="sch-name" placeholder='school'/>
                </div>
            
                <div className="mj-holder">
                    <label htmlFor="sch-major">Major</label>
                    <input type="text" name="sch-major" id="sch-major" placeholder='major'/>
                </div>
            </div>
            
            <div className="grad-holder">
                <label htmlFor="grad-date">Graduation Date</label>
                <input type="date" name="grad-date" id="grad-date" />
            </div>

            <div className="btn-holder">
                <input className="submit-btn" type="submit"/>
                <button type="button" className='btn'>Edit</button>
            </div>
        </form>
    );
}