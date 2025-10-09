import '../styles/Education.css';

export default function Education({ children }) {
    return (
        <section className="education">
            <h2>{children}</h2>
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
                <button className="submit-btn" type="submit">Submit</button>
                <button type="button" className='btn'>Edit</button>
            </div>
        </section>
    );
}