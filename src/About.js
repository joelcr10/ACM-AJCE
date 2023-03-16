import seminar from "./srcImages/seminar.png"
import competitions from "./srcImages/competitions.png"
import exhibition from "./srcImages/exhibition.png"
import jobFair from "./srcImages/jobFair.png"
import projectFair from "./srcImages/projectFair.png"
import techTalk from "./srcImages/techTalks.png"


const About = () => {
    return ( 
        <div className="about">
            <h1>ACM AJCE</h1>
            <hr id="about-line"></hr>
            <p id="about-para">ACM AJCE Student Chapter promotes computer machinery through seminars, events, competitions and exhibitions.</p>
            
            


            <div class="container">
                <div class="row text-center">   
                    <div class="col-xl-4 col-sm-6 mb-5 card-div ">
                        <div class="bg-white  py-3 px-3 card-container" >
                            <img src={seminar} alt="seminar image" width="70" class=""/>
                            <h5 class="card-title">Seminars</h5>
                            {/* <span class="small text-uppercase text-muted">CEO - Founder</span> */}
                            <p class="card-para">ACM provides opportunities to enhance computer-literacy, workshops and seminars
                                on various soft-wares are delivered.</p>
                        </div>
                    </div>

                    <div class="col-xl-4 col-sm-6 mb-5 card-div ">
                        <div class="bg-white  py-3 px-3 card-container" >
                            <img src={competitions} alt="seminar image" width="70" class=""/>
                            <h5 class="card-title">Competitions</h5>
                            {/* <span class="small text-uppercase text-muted">CEO - Founder</span> */}
                            <p class="card-para">We conduct intra and inter-university competitions to provide programmers with a challenging platform to hone their skills.</p>
                        </div>
                    </div>

                    
                    <div class="col-xl-4 col-sm-6 mb-5 card-div ">
                        <div class="bg-white  py-3 px-3 card-container" >
                            <img src={exhibition} alt="seminar image" width="70" class=""/>
                            <h5 class="card-title">Exhibitions</h5>
                            {/* <span class="small text-uppercase text-muted">CEO - Founder</span> */}
                            <p class="card-para">It provides much-needed exposure and networking opportunities. As students receive positive feedback to boost up their confidence.</p>
                        </div>
                    </div>

                </div>

                <div class="row text-center">   
                    <div class="col-xl-4 col-sm-6 mb-5 card-div ">
                        <div class="bg-white  py-3 px-3 card-container" >
                            <img src={jobFair} alt="seminar image" width="70" class=""/>
                            <h5 class="card-title">Job Fairs</h5>
                            {/* <span class="small text-uppercase text-muted">CEO - Founder</span> */}
                            <p class="card-para">ACM provides opportunities to enhance computer-literacy, workshops and seminars
                                on various soft-wares are delivered.</p>
                        </div>
                    </div>

                    <div class="col-xl-4 col-sm-6 mb-5 card-div ">
                        <div class="bg-white  py-3 px-3 card-container" >
                            <img src={projectFair} alt="seminar image" width="70" class=""/>
                            <h5 class="card-title">project Fair</h5>
                            {/* <span class="small text-uppercase text-muted">CEO - Founder</span> */}
                            <p class="card-para">We conduct intra and inter-university competitions to provide programmers with a challenging platform to hone their skills.</p>
                        </div>
                    </div>

                    
                    <div class="col-xl-4 col-sm-6 mb-5 card-div ">
                        <div class="bg-white  py-3 px-3 card-container" >
                            <img src={techTalk} alt="seminar image" width="70" class=""/>
                            <h5 class="card-title">Tech Talk</h5>
                            {/* <span class="small text-uppercase text-muted">CEO - Founder</span> */}
                            <p class="card-para">It provides much-needed exposure and networking opportunities. As students receive positive feedback to boost up their confidence.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default About;