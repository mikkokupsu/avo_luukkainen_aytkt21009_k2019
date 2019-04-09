import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, increment}) => <button onClick={increment}>{text}</button>

const Total = ({good, neutral, bad}) => <div><p>yhteensä {good + neutral + bad}</p></div>

const Average = ({good, neutral, bad}) => {
    const count = good + neutral + bad
    if (count !== 0) {
        return (<div><p>keskiarvo {(good - bad) / count}</p></div>)
    }
    return <div />
}

const Positive = ({good, neutral, bad}) => {
    const count = good + neutral + bad
    if (count !== 0) {
        return (<div><p>positiivisia {good / count * 100}</p></div>)
    }
    return <div />
}

const Statistics = ({good, neutral, bad}) => (
    <div>
        <h1>statistiikka</h1>
        <p>hyvä {good}</p>
        <p>neutraali {neutral}</p>
        <p>huono {bad}</p>
        <Total good={good} neutral={neutral} bad={bad} />
        <Average good={good} neutral={neutral} bad={bad} />
        <Positive good={good} neutral={neutral} bad={bad} />
    </div>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>anna palautetta</h1>
        <div>
            <Button text="hyvä" increment={() => setGood(good + 1)} />
            <Button text="neutraali" increment={() => setNeutral(neutral + 1)} />
            <Button text="huono" increment={() => setBad(bad + 1)}/>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)