import '../styles/General.css';

export default function General({children}) {
    return (
        <div className="general">
            <h1>{children}</h1>
            <div>
                <label htmlFor="full-name">Name</label>
                <input type="text" name="name" id="full-name"/>
            </div>
            
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>
            
            <div>
                <label htmlFor="phone-number">Telephone</label>
                <input type="tel" name="telephone" id="phone-number" />
            </div>

            <div>
                <button type="button">Submit</button>
                <button type="button">Edit</button>
            </div>
        </div>
    );
}