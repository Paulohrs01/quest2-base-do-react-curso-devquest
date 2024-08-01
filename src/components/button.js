import React from 'react'


function MyButton(props) {
    function showClick() {
        alert(`A label desse botão é ${props.label}`)
    }

    return (
        <>
            <button onClick={showClick}>
            {props.label}
            </button>
        </>
    )
}


export default MyButton