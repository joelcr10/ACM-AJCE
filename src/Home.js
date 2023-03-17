// import About from './About'
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
const Home = () => {
    return (
        <div> 
            <div className="home">
                {/* <h1 className="rightSide">ADVANCE COMPUTING AS A SCIENCE AND PASSION</h1> */}
            
                <div className="leftSide">
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p> */}
                </div>
                
                <div className="home-content">
                    <h2 className="acmajce"><span id="acm">ACM</span> <span style={{color: 'white'}}>AJCE</span></h2>
                    <h1>ASSOCIATION OF COMPUTING AND <span style={{color: 'white'}}>MACHINERY</span></h1>

                    <button id="exploreButton">EXPLORE</button>
                    {/* <AwesomeButton type="primary">Primary</AwesomeButton> */}
                </div>
            </div>
            <div className="about">
                {/* <About /> */}
            </div>
            
        </div>
     );
}
 
export default Home;