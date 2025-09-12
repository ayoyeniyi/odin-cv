import { useState } from "react";

export default function Experience({ children }) {
    const [saved, setSaved] = useState(false);

    function handleSave() {
        setSaved(!saved);
    }
    
    return (
        <div className="education">
            <h2>{children}</h2>
            <div>
                <label htmlFor="sch-name">School</label>
                <input type="text" name="sch-name" id="sch-name"/>
            </div>
            
            <div>
                <label htmlFor="major">Major</label>
                <input type="text" name="sch-major" id="sch-major" />
            </div>
            
            <div>
                <label htmlFor="grad-date">Graduation Date</label>
                <input type="date" name="grad-date" id="grad-date" />
            </div>

            <div>
                <button type="button" onClick={handleSave} className='btn'>{ saved ? 'Edit' : 'Save'}</button>
            </div>
        </div>
    );
}