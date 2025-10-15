import '../styles/CV.css';

export default function CV({
    general, 
    education,  
    experience, 
}) {
    return (
        <article className="cv-body">
            <header className="cv-header">
                <h1>{general.name}</h1>
            </header>
            <div className="cv-info">
                <span className='cv-email'>{general.email}</span>
                <span className='cv-number'>{general.phone}</span>
            </div>
            <main>
                <section className='edu-section'>
                    <h2>Education</h2>
                    <div className='school-div'>
                        <span>{education.school}</span>
                        <span>{education.major}</span>
                    </div>
                    <span>Graduation Date: {education.gradDate}</span>
                </section>
                <section>
                    <h2>Experience</h2>
                </section>
            </main>
        </article>
    )
}