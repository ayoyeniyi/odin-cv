import { useState } from "react";
import '../styles/Education.css';

export default function Education({ children }) {
    const [saved, setSaved] = useState(false);

    function handleSave() {
        setSaved(!saved);
    }
    
    return (
        <div className="education">
            <h2>{children}</h2>
            <div className="sch-info">
                <div className='sch-holder'>
                    <label htmlFor="sch-name">School</label>
                    <input type="text" name="sch-name" id="sch-name"/>
                </div>
            
                <div className="mj-holder">
                    <label htmlFor="major">Major</label>
                    <input type="text" name="sch-major" id="sch-major" />
                </div>
            </div>
            
            <div className="grad-holder">
                <label htmlFor="grad-date">Graduation Date</label>
                <input type="date" name="grad-date" id="grad-date" />
            </div>

            <div className="btn-holder">
                <button type="button" onClick={handleSave} className='btn'>{ saved ? 'Edit' : 'Save'}</button>
            </div>
        </div>
    );
}