import html from './images/html.png'
import css from './images/css.jpg'
import js from './images/js.png'
import react from './images/react.png'
import bootstrap from './images/bootstrap.png'
import git from './images/git.png'
import github from './images/github.png'

function Skills(){
    return(
        <main id="skills" className='skills'>
        <div>
            <h3 className="h3">My skills</h3>
            <h1>Where I am good at</h1>
        </div>
        <div className="skills-div">
        <section className="skills-section">
                <img src={html} />
                <h3>HTML</h3>
                <p>Skeleton of webpage</p>
            </section>
            <section className="skills-section">
                <img src={css} />
                <h3>CSS</h3>
                <p>Skeleton of webpage</p>
            </section>
            <section className="skills-section">
                <img src={js} />
                <h3>Javascript</h3>
                <p>Skeleton of webpage</p>
            </section>
            <section className="skills-section">
                <img src={react} />
                <h3>React</h3>
                <p>Skeleton of webpage</p>
            </section>
            <section className="skills-section">
                <img src={git} />
                <h3>Git</h3>
                <p>Skeleton of webpage</p>
            </section>
            <section className="skills-section">
                <img src={github} />
                <h3>Github</h3>
                <p>Skeleton of webpage</p>
            </section>
        </div>
        </main>
    )
}

export default Skills;