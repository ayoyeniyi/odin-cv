import '../styles/General.css';

export default function General({ setData }) {
    function handleClick(formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("telephone");

        setData(prevdata => (
            {
                ...prevdata,
                name,
                email,
                phone
            }
        ))

    }

    return (
        <form className="general" action={handleClick}>
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
                <input className="submit-btn" type="submit"/>
                <button type="button" className='btn'>Edit</button>
            </div>
        </form>
    );
}