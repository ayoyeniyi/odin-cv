import '../styles/Experience.css';

export default function Experience({ data, setData, children }) {
    function handleClick() {
        setData()
    }

    return (
        <section className="experience">
            <h2>{children}</h2>
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
                <button className="submit-btn" type="submit" onClick={handleClick}>Submit</button>
                <button type="button" className='btn'>Edit</button>
            </div>
        </section>
    );
}