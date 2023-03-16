import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Counter  from './Counter';

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
      <Counter />
      
    </div>
  );
}

export default App;
