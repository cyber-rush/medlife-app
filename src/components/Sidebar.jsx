import appointmentIcon from '../lib/timer.svg'
import tasksIcon from '../lib/tasks.svg'
import dropdownIcon from '../lib/dropdown.svg'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2 className='sidebarText'>Medlife</h2>
            <button className='clinicalButton'>
                Add Clinical
                <img src={dropdownIcon} />
            </button>
            <div className='appointment'>
                <img src={appointmentIcon} />
                <div >Appointments</div>
            </div>
            <button className='taskButton'>
                <img src={tasksIcon} />
                Tasks
            </button>

        </div>
    )
}

export default Sidebar
