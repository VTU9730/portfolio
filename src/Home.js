import mypic from './images/mypic.jpeg'
function Home() {
  return (
    <main id="home" className="home">
      <section>
        <h3 className="h3">Hi, I am</h3>
        <h1>Veeraprathap Reddy</h1>
        <h3>React Developer</h3>
        <p>
          Passionate React developer with 3 years of experience building dynamic
          and responsive web applications.
        </p>
        <button className="home-button home-button-cv">Download cv</button>
        <button className="home-button home-button-me">Contact Me</button>
      </section>
      <section className="home-mypic">
        <img src={mypic} />
      </section>
    </main>
  );
}

export default Home;
