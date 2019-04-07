import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.courseName}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
          <Part partName={props.part1} exerciseCount={props.exercises1} />
          <Part partName={props.part2} exerciseCount={props.exercises2} />
          <Part partName={props.part3} exerciseCount={props.exercises3} />
        </div>
      )
}

const Part = (props) => {
    return (
      <p>
        {props.partName} {props.exerciseCount}
      </p>
    )
}

const Total = (props) => {
    return (
        <p>yhteensä {props.exerciseCount} tehtävää</p>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course}/>
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3} />
      <Total exerciseCount={exercises1 + exercises2 + exercises3} />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))