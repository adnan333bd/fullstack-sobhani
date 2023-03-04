import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const AnecdoteDisplay = (props) => {
  console.log(props)
  const { title, text, votes } = props
  return (
    <>
      <h1>{title}</h1>
      <div>{text}</div>
      <div>has {votes} votes</div>
    </>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const randomize = () => {
    const max = anecdotes.length
    const nextSelected = Math.floor(Math.random() * max)
    setSelected(nextSelected)
  }
  const getVote = (idx) => {
    return isNaN(votes[idx]) ? 0 : votes[idx]
  }
  const castVote = () => {
    setVotes({
      ...votes,
      [selected]: getVote(selected) + 1,
    })
  }
  const getIdxWithMostVotes = () => {
    let maxIndex = 0
    let maxVote = 0
    anecdotes.forEach((anc, index) => {
      const thisVote = getVote(index)
      if (thisVote > maxVote) {
        maxVote = thisVote
        maxIndex = index
      }
    })
    return maxIndex
  }
  
  const mostVoteIdx = getIdxWithMostVotes()

  return (
    <>
      <AnecdoteDisplay
        title='Anecdote of the day'
        text={anecdotes[selected]}
        votes={getVote(selected)}
      />

      <Button onClick={castVote} text='vote' />
      <Button onClick={randomize} text='next anecdote' />
      <AnecdoteDisplay
        title='Anecdote with most votes'
        text={anecdotes[mostVoteIdx]}
        votes={getVote(mostVoteIdx)}
      />
    </>
  )
}

export default App
