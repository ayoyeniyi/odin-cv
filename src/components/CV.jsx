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
                <section></section>
                <section></section>
            </main>
        </article>
    )
}