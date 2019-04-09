import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomAnecdoteIndex = (numberOfAnecdotes) => Math.trunc((numberOfAnecdotes - 1) * Math.random())

const vote = (anecdotes, anecdote, setAncedote) => {
    const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const index = anecdotes.indexOf(anecdote)
    anecdotes[index] = newAnecdote
    setAncedote(newAnecdote)
}

const nextAnecdote = (anecdotes, anecdote, setAncedote) => {
    let newAnecdote = anecdote
    while (newAnecdote === anecdote) {
        newAnecdote = anecdotes[randomAnecdoteIndex(anecdotes.length)]
    }
    setAncedote(newAnecdote)
}

const ShowAnecdote = ({label, anecdote}) => (
    <div>
        <h1>{label}</h1>
        <p> {anecdote.anecdote}</p>
        <p>has {anecdote.votes} votes</p>
    </div>
)

const App = ({anecdotes}) => {
    const [anecdote, setAncedote] = useState(anecdotes[0])

    const mostVotes = anecdotes.reduceRight((a, b) => a.votes > b.votes ? a : b, anecdote)

    return (
        <div>
            <ShowAnecdote label="Anecdote of the day" anecdote={anecdote} />
            
            <button onClick={() => vote(anecdotes, anecdote, setAncedote)}>vote</button>
            <button onClick={() => nextAnecdote(anecdotes, anecdote, setAncedote)}>next anecdote</button>

            <ShowAnecdote label="Anecdote with most votes" anecdote={mostVotes} />
        </div>
    )
}

const anecdotes = [
  {anecdote: 'If it hurts, do it more often', votes: 0},
  {anecdote: 'Adding manpower to a late software project makes it later!', votes: 0},
  {anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
  {anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
  {anecdote: 'Premature optimization is the root of all evil.', votes: 0},
  {anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)