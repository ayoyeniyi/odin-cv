import '../styles/General.css';

export default function General({children}) {
    return (
        <div className="general">
            <h2>{children}</h2>
            <div className='gen-info'>
                <div className='name-holder'>
                    <label htmlFor="full-name">Name</label>
                    <input type="text" name="name" id="full-name"/>
                </div>
                
                <div className='email-holder'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
            </div>
            
            <div className='tel-holder'>
                <label htmlFor="phone-number">Telephone</label>
                <input type="tel" name="telephone" id="phone-number" />
            </div>

            <div className=''>
                <button type="button">Save</button>
                <button type="button">Edit</button>
            </div>
        </div>
    );
}