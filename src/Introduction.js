import mypic2 from "./images/mypic2.jpeg";
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Introduction() {
  return (
    <main id="introduction" className="introduction">
      <section>
        <img src={mypic2} width="960" height="1280" />
      </section>
      <section>
        <h3 className="h3">My Intro</h3>
        <h1>About Me</h1>
        <p>
          Passionate React developer with 3 years of experience building dynamic
          and responsive web applications.
        </p>
        <p>
          <span class="material-icons">person</span>
          <label>Name:</label>
          <span>Siddavatam Veeraprathap Reddy</span>
        </p>
        <p>
        <span class="material-icons">call</span>
          <label>Phone:</label>
          <span>9182505146</span>
        </p>
        <p>
        <span class="material-icons">mail</span>
          <label>Email:</label>
          <span>prathapsiddavatam@gmail.com</span>
        </p>
        <h3>My Interests</h3>
        <article className="introduction-article">
        <span class="material-icons">travel_explore</span>Travel
        <span class="material-icons">code</span>Coding
        <span class="material-icons">movie</span>Movies
        </article>
      </section>
    </main>
  );
}

export default Introduction;
