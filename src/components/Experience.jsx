import { useState } from "react";

export default function Experience({children}) {
    const [saved, setSaved] = useState(false);

    function handleSave() {
        setSaved(!saved);
    }
    
    return (
        <div className="experience">
            <h2>{children}</h2>
            <div className="cmp-info">
                <div className='cmp-holder'>
                    <label htmlFor="cmp-name">Company</label>
                    <input type="text" name="cmp-name" id="cmp-name"/>
                </div>
            
                <div className="role-holder">
                    <label htmlFor="role">Role</label>
                    <input type="text" name="role" id="role" />
                </div>

                <div className="start-holder">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" name="start-date" id="start-date" />
                </div>

                <div className="end-holder">
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" name="end-date" id="end-date" />
                </div>
            </div>
            
            <div className="rsp-holder">
                <label htmlFor="responsibilties">Responsibilities</label>
                <textarea type="date" name="responsibilites" id="responsibilties" />
            </div>

            <div className="btn-holder">
                <button type="button" onClick={handleSave} className='btn'>{ saved ? 'Edit' : 'Save'}</button>
            </div>
        </div>
    );
}