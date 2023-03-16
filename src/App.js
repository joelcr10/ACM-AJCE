import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home-section">
        <div className="homeBackground">
        <div className="leftOverlay"></div>
        
        <div className='content'>.
          <Home />
        </div>
      </div>
      </div>
      <About />
    </div>
  );
}

export default App;
