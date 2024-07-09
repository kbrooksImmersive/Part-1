import { useState } from 'react'

const Anecdote = ({anecdote}) => (<div>{anecdote}</div>)

const AnecdoteVotes = ({votes}) => (<div>has {votes} votes</div>)

const App = () => {

  const handleVote = () => {
    console.log("Vote for anecdote:",selected,anecdotes[selected])
    const newPoints = [...points]
    newPoints[selected] += 1
    console.log("New votes:",newPoints)

    const currentMaxIndex = newPoints.reduce(
      (maxIndex, val, i, arr) => 
        val > arr[maxIndex] ? i 
          : maxIndex, 0
    )
    console.log("anecdote with most votes:",anecdotes[currentMaxIndex],"Votes:",newPoints[currentMaxIndex])

    setPoints(newPoints)
    setMaxIndex(currentMaxIndex)
  }
  
  const handleRandomNum = (max) => {
    const num = Math.floor(Math.random()*max)
    console.log("Max number: ",max,"random number:",num)
    setSelected(num)
    return num
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
   
  const [selected, setSelected] = useState(0)

  const [maxIndex, setMaxIndex] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <AnecdoteVotes votes={points[selected]} />
      <button onClick={()=>handleVote()}>vote</button>
      <button onClick={()=>handleRandomNum(anecdotes.length)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[maxIndex]} />
      <AnecdoteVotes votes={points[maxIndex]} />
    </div>
  )
}

export default App