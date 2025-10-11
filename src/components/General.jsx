import '../styles/General.css';

export default function General({ data, setData }) {
    function handleClick() {
        setData()
    }

    return (
        <section className="general">
            <h2>General</h2>
            <div className='gen-info'>
                <div className='name-holder'>
                    <label htmlFor="full-name">Name</label>
                    <input type="text" name="name" id="full-name" placeholder='name'/>
                </div>
                
                <div className='email-holder'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='email'/>
                </div>
            </div>
            
            <div className='tel-holder'>
                <label htmlFor="phone-number">Telephone</label>
                <input type="tel" name="telephone" id="phone-number" placeholder='phone'/>
            </div>

            <div className='btn-holder'>
                <button className="submit-btn" type="submit" onClick={handleClick}>Submit</button>
                <button type="button" className='btn'>Edit</button>
            </div>
        </section>
    );
}