import React from 'react'

const Button = ({label}) =>
    <button onClick={() => buttonHandler()}>
        {label}
    </button>

const buttonHandler = () => {
    alert("I was clicked!")
}


export default Button