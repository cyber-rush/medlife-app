import queenIcon from '../lib/queen.png'

const AppointmentCard = ({ status, assessmentType, id }) => {

    let myClass;
    if (id === '1') myClass = 'id1'
    if (id === '2') myClass = 'id2'
    if (id === '3') myClass = 'id3'

    return (
        <div className={myClass}>
            <div className='profile'>
                <button>
                    <img src={queenIcon} alt="Profile Image" />
                </button>
                <div className='profileData'>
                    <h2>Melanie Laurent</h2>
                    <h4>Appointment Id.:  324424</h4>
                    <a id='assessment'>{assessmentType}</a>
                </div>
                <div className='taskData'>
                    <table>
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
                </div>
                <div className='statusAndAssessment'>
                    <h5>Status
                        <span className={status === "Overdue" ? "overdue" : "upcoming"}>
                            {status}
                        </span>
                    </h5>
                    <button>
                        {status === "Overdue" ? "Start Assessment" : "Continue Assessment"}

                    </button>
                </div>

            </div>
        </div >
    )
}

export default AppointmentCard
