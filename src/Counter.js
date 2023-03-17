import CountUp, { useCountUp } from 'react-countup';
const Counter = () => {
    return (   
        <div class="wrapper parallax" id="counter-container">
            <div class="counter col_fourth">
            
            {/* <h2 class="timer count-title count-number" data-to="700" data-speed="1500">700</h2> */}
            <CountUp end={700} suffix={'+'} scrollSpyOnce enableScrollSpy className='timer count-title count-number'/>
            <p class="count-text ">Members</p>
            </div>

            <div class="counter col_fourth">
            {/* <i class="fa fa-coffee fa-2x"></i> */}
            {/* <h2 class="timer count-title count-number" data-to="28" data-speed="1500">28</h2> */}
            <CountUp end={28} enableScrollSpy scrollSpyOnce className='timer count-title count-number'/>
            <p class="count-text ">Execom Members</p>
            </div>

            <div class="counter col_fourth">
            {/* <i class="fa fa-lightbulb-o fa-2x"></i> */}
            {/* <h2 class="timer count-title count-number" data-to="20" data-speed="1500">20</h2> */}
            <CountUp end={20} enableScrollSpy scrollSpyOnce className='timer count-title count-number'/>
            <p class="count-text ">Workshop Hosted</p>
            </div>

            <div class="counter col_fourth end">
            {/* <i class="fa fa-bug fa-2x"></i> */}
            {/* <h2 class="timer count-title count-number" data-to="157" data-speed="1500">157</h2> */}
            <CountUp end={157} enableScrollSpy scrollSpyOnce className='timer count-title count-number'/>
            <p class="count-text ">Project Completed</p>
            </div>
        </div>

    );
}
 
export default Counter;

