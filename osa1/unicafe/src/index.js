import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({text, increment}) => <button onClick={increment}>{text}</button>

  const SimpleStats = ({good, neutral, bad}) => (
    <div>
        <p>hyvä {good}</p>
        <p>neutraali {neutral}</p>
        <p>huono {bad}</p>
    </div>
  )

  return (
    <div>
        <h1>anna palautetta</h1>
        <div>
            <Button text="hyvä" increment={() => setGood(good + 1)} />
            <Button text="neutraali" increment={() => setNeutral(neutral + 1)} />
            <Button text="huono" increment={() => setBad(bad + 1)}/>
        </div>
        <div>
            <h1>statistiikka</h1>
            <SimpleStats good={good} neutral={neutral} bad={bad} />
        </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)