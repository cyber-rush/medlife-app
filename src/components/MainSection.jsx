import searchIcon from '../lib/searchIcon.svg'
import filterIcon from '../lib/filter.svg'
import UpcomingTasks from './UpcomingTasks'
import Button from './Button'
import { useTask } from '../context/task.context'
import CompletedTasks from './CompletedTasks'
const MainSection = () => {
    const { taskType } = useTask()
    return (
        <div className="mainSection">
            <div className="lower">

            </div>
            <div className="higher">
                <div className='searchAndFilterButtons'>
                    <div className='searchBar'>
                        <img src={searchIcon} alt="Search Icon" className="searchIcon" />
                        <input type="text" placeholder="Search.." name="search" />
                    </div>
                    <div className='date'>
                        <input type='date' />
                        <div>to</div>
                        <input type='date' />
                    </div>
                    <div className='applyAndResetButtons'>
                        <Button buttonName="Apply" />
                        <Button buttonName="Reset" />
                    </div>
                    <div className='filter'>

                        <button>
                            <img src={filterIcon} alt="Filter" className='filterImg' />
                            Filter
                        </button>
                    </div>
                </div>

                <div className='items'>
                    {taskType === 'upcoming' ? <UpcomingTasks /> : <CompletedTasks />}

                </div>
            </div>
        </div>
    )
}

export default MainSection
