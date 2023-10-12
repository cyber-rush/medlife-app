

import navAskIcon from '../lib/askIcon.svg'
import navBellIcon from '../lib/bellIcon.svg'
// import navClockedIn from '../lib/Clocked-in.svg'
import adminIcon from '../lib/AdminIcon.svg'
import navClockedIn from '../lib/clockedIn.svg'

const Navbar = () => {
    return (
        <>
            <div className="logo">lOGO</div>
            <div className="mainLinks">
                <a href="#">Dashboard</a>
                <a href="#">Patients</a>
                <a href="#">Human Resources</a>
                <a href="#">Clinical</a>
                <a href="#" className='active'>Compliance</a>
                <a href="#">Billing</a>
                <a href="#">Reports</a>
            </div>
            <div className="additionalLinks">
                <button className="clocked">
                    <img src={navClockedIn} />
                </button>
                <img src={navAskIcon} alt="Ask" />
                <img src={navBellIcon} alt="Bell" />
                <button className='admin'>
                    <img src={adminIcon} alt="Admin" />
                </button>
                <div className='account'>Account</div>
            </div>
        </>
    )
}

export default Navbar

