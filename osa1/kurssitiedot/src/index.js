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
          <Part partName={props.parts[0].name} exerciseCount={props.parts[0].exercises} />
          <Part partName={props.parts[1].name} exerciseCount={props.parts[1].exercises} />
          <Part partName={props.parts[2].name} exerciseCount={props.parts[2].exercises} />
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
        <p>yhteensä {props.parts.map(i => i.exercises).reduceRight((a, b) => a + b, 0)} tehtävää</p>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const parts = [
        {
            name: 'Reactin perusteet',
            exercises: 10
        },
        {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
        },
        {
            name: 'Komponenttien tila',
            exercises: 14
        }
    ]
  
  return (
    <div>
      <Header courseName={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))