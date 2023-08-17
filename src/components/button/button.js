import './button.css'

const Button = ({label}) => {
    return (
        <button className="btn" onClick={() => alertLabelOnButton(label)} label={label}>
            {label}
        </button>
    )
}

const alertLabelOnButton = (label) => {
    alert(`A label desse botão é ${label}`)
}

export default Button