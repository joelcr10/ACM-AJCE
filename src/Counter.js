const Counter = () => {
    return (   
        <div class="wrapper parallax" id="counter-container">
            <div class="counter col_fourth">
            
            <h2 class="timer count-title count-number" data-to="700" data-speed="1500"></h2>
            <p class="count-text ">ACM Members</p>
            </div>

            <div class="counter col_fourth">
            <i class="fa fa-coffee fa-2x"></i>
            <h2 class="timer count-title count-number" data-to="28" data-speed="1500"></h2>
            <p class="count-text ">Execom Members</p>
            </div>

            <div class="counter col_fourth">
            <i class="fa fa-lightbulb-o fa-2x"></i>
            <h2 class="timer count-title count-number" data-to="20" data-speed="1500"></h2>
            <p class="count-text ">Workshop Hosted</p>
            </div>

            <div class="counter col_fourth end">
            <i class="fa fa-bug fa-2x"></i>
            <h2 class="timer count-title count-number" data-to="157" data-speed="1500"></h2>
            <p class="count-text ">Project Completed</p>
            </div>
        </div>

    );
}
 
export default Counter;