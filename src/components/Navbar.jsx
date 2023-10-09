// import { NavLink } from "react-router-dom";
// import styles from "./Navbar.module.css"; // Import your CSS file for styles
import navAskIcon from '../lib/askIcon.svg'
import navBellIcon from '../lib/bellIcon.svg'
import navClockedIn from '../lib/Clocked-in.svg'
import adminIcon from '../lib/AdminIcon.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="#">lOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Table of Contents</h5>
                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mainLinks">
                            <li className="nav-item">
                                <a className="nav-link  " aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-current="page" href="#">Patients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-current="page" href="#">Human Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">Clinical</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-current="page" href="#">Compliance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-current="page" href="#">Billing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-current="page" href="#">Reports</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 lastLinkSection">
                            <li className="nav-item clockedLink">
                                <button className='clocked'>
                                    <img src={navClockedIn} />
                                    Clocked-In
                                </button>

                            </li>
                            <li className="nav-item lastLinks">
                                <img src={navAskIcon} />
                            </li>
                            <li className="nav-item lastLinks">
                                <img src={navBellIcon} />
                            </li>
                            <li className="nav-item lastLinks">
                                <img src={adminIcon} />
                            </li>
                            <li className="nav-item lastLinks">
                                Account
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>


    );
};

export default Navbar;
