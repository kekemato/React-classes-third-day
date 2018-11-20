import React from 'react'

const Button = (props) =>
    <button onClick={() => buttonHandler()}>
        {props.label}
    </button>

const buttonHandler = () => {
    alert("I was clicked!")
}


export default Button