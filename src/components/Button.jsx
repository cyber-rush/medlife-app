
const Button = ({ buttonName }) => {
    return (
        <>
            <button className={buttonName === 'Apply' ? 'apply' : 'reset'}>{buttonName}</button>
        </>
    )
}

export default Button
