import logo from './srcImages/acm_ajce_logo.png'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} className="navbar-logo" alt="acm logo"></img>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/">ABOUT US</a>
                <a href="/">EVENTS</a>
                <a href="/">EXECOM</a>
                <a href="/">MEMBERSHIP</a>
                {/* <a href="/">HELP</a> */}
            </div>
        </nav>
     );
}
 
export default Navbar;