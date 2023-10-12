import AppointmentCard from "./AppointmentCard"

const UpcomingTasks = () => {
    return (
        <>
            <AppointmentCard assessmentType="Intake Comprehensive Assessment" status="overdue" date="Thursday, 28 Dec 2022" />
            <AppointmentCard assessmentType="Physiotherapy Assessment" status="upcoming" date="Wednesday, 27 Dec 2022" />
            <AppointmentCard assessmentType="Intake Comprehensive Assessment" status="overdue" />
        </>
    )
}

export default UpcomingTasks
