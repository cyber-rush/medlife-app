// import { NavLink } from "react-router-dom";
// import styles from "./Navbar.module.css"; // Import your CSS file for styles
import navAskIcon from '../lib/askIcon.svg'
import navBellIcon from '../lib/bellIcon.svg'
import navClockedIn from '../lib/Clocked-in.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navLogo'>lOGO</div>
            <div className='navLinksAndButtons'>
                <div className='navLinks'>
                    <div>Dashboards</div>
                    <div>Patients</div>
                    <div>Human Resorces</div>
                    <div>Clinical</div>
                    <div>Compliance</div>
                    <div>Billing</div>
                    <div>Reports</div>
                </div>
                <div className='navButtons'>
                    <button className='clockedImageButton'>
                        <img src={navClockedIn} />
                        <div>Clocked-In</div>
                    </button>
                    <button className='askButton'>
                        <img src={navAskIcon} alt='ask-icon' />
                    </button>
                    <button className='bellBotton'>
                        <img src={navBellIcon} alt='bell-icon' />
                    </button>
                    <button className='adminButton'>
                        MA
                    </button>
                    <button className='accountButton'>
                        Account
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
