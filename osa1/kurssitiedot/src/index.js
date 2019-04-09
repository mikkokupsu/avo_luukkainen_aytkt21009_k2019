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
          <Part partName={props.part1.name} exerciseCount={props.part1.exercises} />
          <Part partName={props.part2.name} exerciseCount={props.part2.exercises} />
          <Part partName={props.part3.name} exerciseCount={props.part3.exercises} />
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
    const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
    }
    const part2 = {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    }
    const part3 = {
      name: 'Komponenttien tila',
      exercises: 14
    }
  
  return (
    <div>
      <Header courseName={course}/>
      <Content 
        part1={part1}
        part2={part2}
        part3={part3} />
      <Total exerciseCount={part1.exercises + part2.exercises + part3.exercises} />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))