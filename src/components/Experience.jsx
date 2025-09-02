export default function Experience() {
    return (
        <div className="general">
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
                <button type="button">Submit</button>
                <button type="button">Edit</button>
            </div>
        </div>
    );
}