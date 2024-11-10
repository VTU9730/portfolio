function Navbar() {
  return (
    <nav className="nav" id="nav">
        <img class="nav-logo" src="https://imgs.search.brave.com/MWZMDHODzIpYRs2nI-1qErxdmgrIegW_70G4oNr0knE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9wRGJIcGZkd2I3/XzJGMld2N2tvcGVL/RUN6Rm89LzB4MDox/NTAweDE1MDAvZml0/LWluLzUwMHg1MDAv/cHJvamVjdHMtZmls/ZXMvMTc1LzE3NTM3/LzE3NTM3OTQvZjlm/NDhmYTItYzljOC00/NGQzLWJhODUtMzU1/YTJhOWNhMGUyLmpw/Zw" alt="logo" height="500" width="500" />
      <ul className="nav-ul">
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#introduction">
          <li>My Intro</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#qualification">
          <li>Qualification</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
