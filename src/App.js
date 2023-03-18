import './App.css';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Home from './Home';
import BasicSlider from './Home2'
import About from './About'
import Counter  from './Counter';
import Events2 from './Events2';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navbar2 /> */}
      {/* <div className="home-section">
        <div className="homeBackground">
        <div className="leftOverlay"></div>
        
        <div className='content'>.
          <Home />
        </div>
      </div>
      </div> */}
      <BasicSlider/>
      <About />
      <Counter />
      <Events2/>
      <Footer/>
      
    </div>
  );
}

export default App;
