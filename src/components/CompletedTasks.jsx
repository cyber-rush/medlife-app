import AppointmentCard from "./AppointmentCard"
const CompletedTasks = () => {
    return (
        <>
            <AppointmentCard status="Overdue" assessmentType="Intake Comprehensive Assessment" id="1" />
            <AppointmentCard status="Upcoming" assessmentType="Physiotherapy Assessment" id="2" />
            <AppointmentCard status="Overdue" assessmentType="Intake Comprehensive Assessment" id="3" />
        </>
    )
}

export default CompletedTasks
