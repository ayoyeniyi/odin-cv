import '../styles/Experience.css';

export default function Experience({ setData }) {
    function handleClick(formData) {
        const company = formData.get("cmp-name");
        const role = formData.get("role");
        const startDate = formData.get("start-date");
        const endDate = formData.get("end-date");
        const responsibilities = formData.get("responsibilities");

        setData(prevData => (
            {
                ...prevData,
                company,
                role,
                startDate,
                endDate,
                responsibilities
            }
        ))
    }

    return (
        <form className="experience" action={handleClick}>
            <h2>Experience</h2>
            <div className="cmp-info">
                <div className="top-row">
                    <div className='cmp-holder'>
                        <label htmlFor="cmp-name">Company</label>
                        <input type="text" name="cmp-name" id="cmp-name" placeholder='company'/>
                    </div>
            
                    <div className="role-holder">
                        <label htmlFor="role">Role</label>
                        <input type="text" name="role" id="role" placeholder='role'/>
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
                <textarea name="responsibilities" id="responsibilities" placeholder='Stuff I did...'/>
            </div>

            <div className="btn-holder">
                <input className="submit-btn" type="submit"/>
                <button type="button" className='btn'>Edit</button>
            </div>
        </form>
    );
}