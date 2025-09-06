export default function Experience({ children }) {
    return (
        <div className="experience">
            <h2>{children}</h2>
            <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="Name" id="full-name"/>
            </div>
            
            <div>
                <label htmlFor="Email">Email Address:</label>
                <input type="email" name="Email" id="email" />
            </div>
            
            <div>
                <label htmlFor="Telephone"></label>
                <input type="tel" name="Telephone" id="phone-number" />
            </div>

            <div>
                <button type="button" onClick={handleSave} className='btn'>{ saved ? 'Edit' : 'Save'}</button>
            </div>
        </div>
    );
}