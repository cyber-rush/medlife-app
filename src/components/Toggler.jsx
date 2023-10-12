import { useTask } from "../context/task.context"
import activeLinkIcon from '../lib/activeLine.svg'
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
                <div id={taskType === 'upcoming' && 'linkOnActive'} onClick={selectUpcomingTasks}>Upcoming Tasks</div>
                <div id={taskType === 'completed' && 'linkOnActive'} onClick={selectCompletedTasks}>Completed Tasks</div>
                {
                    taskType === 'upcoming'
                        ? <img src={activeLinkIcon} alt="Active-Link" className='activeLinkImageForUpcoming' />
                        : <img src={activeLinkIcon} alt="Active-Link" className='activeLinkImageForCompleted' />
                }
            </div>



        </>
    )
}

export default Toggler
