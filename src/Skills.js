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
                <p>HTML is the skeleton of the web—without it, the internet would be all style, no substance."</p>
            </section>
            <section className="skills-section">
                <img src={css} />
                <h3>CSS</h3>
                <p>CSS takes the skeleton of HTML and adds the skin, muscles, and fashion.</p>
            </section>
            <section className="skills-section">
                <img src={js} />
                <h3>Javascript</h3>
                <p>JavaScript is the engine under the hood of your website—without it, it’s just a car that can’t move.</p>
            </section>
            <section className="skills-section">
                <img src={react} />
                <h3>React</h3>
                <p>React is like a magician, making UI changes appear instantly with minimal effort.</p>
            </section>
            <section className="skills-section">
                <img src={git} />
                <h3>Git</h3>
                <p>Git is the version control system that lets you go back in time without a time machine.</p>
            </section>
            <section className="skills-section">
                <img src={github} />
                <h3>Github</h3>
                <p>GitHub is the social network for developers, where code becomes the currency of collaboration</p>
            </section>
        </div>
        </main>
    )
}

export default Skills;