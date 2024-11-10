import Home from "./Home";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Qualification from "./Qualification";
// import Portfolio from "./Portfolio";

import './style.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Introduction />
      <Skills />
      <Qualification />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
