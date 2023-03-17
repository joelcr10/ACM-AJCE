import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Counter  from './Counter';
import Events from './Events';
import Events2 from './Events2';
import Footer from './Footer';

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
      <Events2/>
      <Footer/>
      
    </div>
  );
}

export default App;
