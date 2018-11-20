import React from 'react'

import Button from './button.js'

const App = (props) => (
    <div>

            <Button
                label="Click me!"
                onClickHandler = {() => alert("Click!")}
            />

            <Button
                label="Kliknij mnie!"
                onClickHandler = {() => alert("Kliknąłeś mnie!")}
            />
    </div>
)

export default App