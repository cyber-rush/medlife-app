import AppointmentCard from "./AppointmentCard"

const CompletedTasks = () => {
    return (
        <>
            <AppointmentCard assessmentType="Intake Comprehensive Assessment" status="overdue" />
            <AppointmentCard assessmentType="Physiotherapy Assessment" status="upcoming" />
            <AppointmentCard assessmentType="Intake Comprehensive Assessment" status="overdue" />
        </>
    )
}

export default CompletedTasks
