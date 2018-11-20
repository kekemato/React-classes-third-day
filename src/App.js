import React from 'react'

const name = ['Ala', 'Ola', 'Ela']

const App = (props) => (
    <ul>
        {name.map(el => <li key={el}> {el}</li>)}
    </ul>
  )

export default App