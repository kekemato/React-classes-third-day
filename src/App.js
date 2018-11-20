import React from 'react'

const names = ['Ala', 'Ola', 'Ela']
const namesList = names.map(el => <li key={el}> {el}</li>)

const App = (props) => (
    <div>
        <div>
            {names}
        </div>
        <ul>
            {namesList}
        </ul>
    </div>
)

export default App