import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, increment}) => <button onClick={increment}>{text}</button>

const Statistic = ({label, value}) => <div><p>{label} {value()}</p></div>

const Statistics = ({good, neutral, bad}) => {
    const count = good + neutral + bad
    if (count > 0) {
        return (
            <div>
                <Statistic label="hyvä" value={() => good} />
                <Statistic label="neutraal" value={() => neutral} />
                <Statistic label="huono" value={() => bad} />
                <Statistic label="yhteensä" value={() => count} />
                <Statistic label="keskiarvo" value={() => (good - bad) / count} />
                <Statistic label="positiivisia" value={() => good / count * 100} />
            </div>
        )
    } else {
        return <div><p>Ei yhtään palautetta annettu</p></div>
    }
}

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
        <h1>statistiikka</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)