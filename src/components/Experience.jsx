import { useState } from "react";
import '../styles/Experience.css';

export default function Experience({children}) {
    const [saved, setSaved] = useState(false);

    function handleSave() {
        setSaved(!saved);
    }
    
    return (
        <div className="experience">
            <h2>{children}</h2>
            <div className="cmp-info">
                <div className="top-row">
                    <div className='cmp-holder'>
                        <label htmlFor="cmp-name">Company</label>
                        <input type="text" name="cmp-name" id="cmp-name"/>
                    </div>
            
                    <div className="role-holder">
                        <label htmlFor="role">Role</label>
                        <input type="text" name="role" id="role" />
                    </div>
                </div>
                
                <div className="bot-row">
                    <div className="start-holder">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" name="start-date" id="start-date" />
                    </div>

                    <div className="end-holder">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" name="end-date" id="end-date" />
                    </div>
                </div>
                
            </div>
            
            <div className="rsp-holder">
                <label htmlFor="responsibilties">Responsibilities</label>
                <textarea name="responsibilities" id="responsibilities" />
            </div>

            <div className="exp-btn-holder">
                <div className="add-btn-holder">
                    <button type="button" className='add-btn'>Add</button>
                </div>

                <div className="save-btn-holder">
                    <button type="button" onClick={handleSave} className='save-btn'>{ saved ? 'Edit' : 'Save'}</button>
                </div>
            </div>
        </div>
    );
}