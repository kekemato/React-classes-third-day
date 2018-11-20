import React from 'react'

const names = ['Ala', 'Ola', 'Ela']

const App = (props) => (
    <div>
        <div>
            {names}
        </div>
        <ul>
            {names.map(el => <li key={el}> {el}</li>)}
        </ul>
    </div>
)

export default App