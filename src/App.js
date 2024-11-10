import Home from "./Home";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import './style.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Introduction />
    </div>
  );
}

export default App;
