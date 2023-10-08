import AppointmentCard from "./AppointmentCard"
const UpcomingTasks = () => {
    return (
        <>
            <div className='todayItem'>Thursday, 28 Dec 2022</div>
            <AppointmentCard status="Overdue" assessmentType="Intake Comprehensive Assessment" id="1" />
            <div className='nextDayItem' >Wednesday, 27 Dec 2022</div>
            <AppointmentCard status="Upcoming" assessmentType="Physiotherapy Assessment" id="2" />
            <AppointmentCard status="Overdue" assessmentType="Intake Comprehensive Assessment" id="3" />
        </>
    )
}

export default UpcomingTasks
