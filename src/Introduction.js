import mypic from './images/mypic.jpeg'

function Introduction() {
  return (
    <main id="introduction" className="introduction">
      <section>
        <img src={mypic} width="960" height="1280" />
      </section>
      <section>
        <h3 className="h3">My Intro</h3>
        <h1>About Me</h1>
        <p>
          Passionate React developer with 3 years of experience building dynamic
          and responsive web applications.
        </p>
        <p><label>Name:</label><span>Siddavatam Veeraprathap Reddy</span></p>
        <p><label>Phone:</label><span>9182505146</span></p>
        <p><label>Email:</label><span>prathapsiddavatam@gmail.com</span></p>
        <h3>My Interests</h3>
        <article className="introduction-article">
            <ul>
                <li>Travel</li>
                <li>Coding</li>
                <li>Movies</li>
            </ul>
        </article>
      </section>

    </main>
  );
}

export default Introduction;
