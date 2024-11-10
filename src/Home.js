import mypic from './images/mypic.jpeg'
function Home() {
  return (
    <main id="home" className="home">
      <section>
        <h3 className="h3">Hi, I am</h3>
        <h1>Veeraprathap Reddy</h1>
        <h3>React Developer</h3>
        <p>
        Bringing interactive web experiences to life with React and modern web technologies.
        </p>
        <button className="home-button home-button-cv"><a href="/Pratap_Frontend.pdf" download="Pratap_Frontend.pdf">Download CV</a></button>
        <button className="home-button home-button-me">Contact Me</button>
      </section>
      <section className="home-mypic">
        <img src={mypic} />
      </section>
    </main>
  );
}

export default Home;
