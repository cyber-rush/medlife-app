import { useTask } from '../context/task.context'
import Button from './Button'
import CompletedTasks from './CompletedTasks'
import Input from './Input'
import UpcomingTasks from './UpcomingTasks'
const MainSection = () => {
    const { taskType } = useTask()
    return (
        <div className="mainSectionTopLayer">
            <div className="menu-bar">
                <Input type="text" className="search-input" placeholder="Search..." />
                <Input type="date" className="date-input" placeholder="From Date" />
                <Input type="date" className="date-input" placeholder="To Date" />

                <Button className="apply-button" buttonText="Apply" />
                <Button className="reset-button" buttonText="Reset" />
                <Button className="filter-button" buttonText="Filter" />

            </div>
            {taskType === 'upcoming'
                ? <UpcomingTasks />
                : <CompletedTasks />
            }

        </div>
    )
}

export default MainSection
