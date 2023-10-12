import profileIcon from '../lib/queen.svg'
const AppointmentCard = ({ assessmentType, status, date }) => {
    return (
        <>
            {date && <div className='cardDate'>{date}</div>}
            <div className="containerCard">
                <div className="profile-picture">
                    <img src={profileIcon} />
                </div>


                <div className="profile-data">
                    <h2>Malenie Laurent</h2>
                    <p className="appointment-id">Appointment Id.: 324424</p>
                    <p className='assessmentType'>{assessmentType}</p>
                </div>
                <table className="appointment-info">
                    <tr>
                        <th>Task ID:</th>
                        <td>2323232</td>

                    </tr>
                    <tr>
                        <th>Date & time:</th>
                        <td>December 22, 2022  10:30 AM</td>

                    </tr>
                    <tr>
                        <th>Duration:</th>
                        <td>1 hour</td>

                    </tr>
                </table>
                <div className='status-info'>
                    <div>
                        Status
                        <span className={status === 'upcoming' ? 'upcoming' : 'overdue'}>
                            {status === 'upcoming' ? 'Upcoming' : 'Overdue'}
                        </span>
                    </div>
                    <button className="start-assessment-button">
                        Start Assessment
                    </button>
                </div>

            </div>
        </>
    )
}

export default AppointmentCard
