import acmLogo from './srcImages/acm_ajce_logo.png'
import ajceLogo from './srcImages/logo-light-ajce.png'
import acmLogo2 from './srcImages/acm_logo2.png'
import { BsFacebook } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return ( 
        <footer>
            <div className='upper-footer'>
                <div className='footer-column footer-logo'>
                    <img src={ajceLogo}></img>
                    <div className='footer-logo-text'>
                        <h1>Location: Kanjirapally, Kottayam District, Kerala</h1>
                        <h1>Phone: +91 85478 88365</h1>
                    </div>
                </div>
                <div className='footer-column footer-logo'>
                    <img src={acmLogo2} id="acm-footer-logo"></img>
                    <h1>E-mail: acmajce@amaljyothi.ac.in</h1>
                    <h1>Phone: +91 8547881984</h1>
                </div>
                <div className='footer-column'>
                    {/* <h2 id='socials-title'>OUR SOCIALS</h2> */}
                    <div className='socials'>
                        <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
                        <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                        <i class="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                        <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
                
            </div>
            <div id='copyright'>
                <span>Copyright © 2023 All rights reserved | ACM AJCE</span>
            </div>
        </footer>
     );
}
 
export default Footer;