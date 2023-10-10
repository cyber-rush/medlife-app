import { useTask } from "../context/task.context"
import activeLinkIcon from '../lib/activeLine.svg'
// import ActiveComponent from "./ActiveComponent"
const Toggler = () => {


    const { taskType, selectUpcomingTasks, selectCompletedTasks } = useTask()
    console.log(selectUpcomingTasks, selectCompletedTasks)

    return (
        <>
            <div className="taskPanel">
                <h3>Tasks</h3>
                <h5>Clinical  Tasks</h5>
            </div>
            <div className="links">
                <a id={taskType === 'upcoming' && 'linkOnActive'} onClick={selectUpcomingTasks}>Upcoming Tasks</a>
                <a id={taskType === 'completed' && 'linkOnActive'} onClick={selectCompletedTasks}>Completed Tasks</a>
            </div>
            {
                taskType === 'upcoming'
                    ? <img src={activeLinkIcon} alt="Active-Link" className='activeLinkImageForUpcoming' />
                    : <img src={activeLinkIcon} alt="Active-Link" className='activeLinkImageForCompleted' />
            }


        </>
    )
}

export default Toggler
