import appointmentIcon from '../lib/timer.svg'
import tasksIcon from '../lib/tasks.svg'
import dropdownIcon from '../lib/dropdown.svg'
const Sidebar = () => {
    return (
        <>
            <h2 className='sidebarText'>Medlife</h2>
            <button className='clinicalButton'>
                <span className="buttonText">Add Clinical</span>
                <img src={dropdownIcon} className='dropdownIcon' alt='dropdown Icon' />
            </button>
            <button className='appointment'>
                <img src={appointmentIcon} className='appointmentIcon' alt='appintment Icon' />
                <span className='appointmentText'>Appointments</span>
            </button>
            <button className='taskButton'>
                <img src={tasksIcon} className='tasksIcon' alt='tasks Icon' />
                <span className='taskText'>Tasks</span>
            </button>

        </>
    )
}

export default Sidebar
