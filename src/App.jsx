import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  const calculateAverage = (reviews, totalReviews) => {
    console.log('calculateAverage:',reviews)
    const goodScale = 1
    const neutralScale = 0
    const badScale = -1

    let weightedScore = reviews.good*goodScale + reviews.neutral*neutralScale + reviews.bad*badScale
    let average = weightedScore/totalReviews
    
    console.log(weightedScore,totalReviews,average)

    return average
  }

  const calculatePercentage = (targetNumber, totalReviews) => {
    console.log('calculatePercentage:',targetNumber,totalReviews)

    let percentage = (targetNumber/totalReviews * 100) + ' %'

    console.log(targetNumber,totalReviews,percentage)

    return percentage
  }

  const divisionHandleDiv0 = (numerator, denominator) => {
    if(denominator === 0){
      return 'will calculate when reviews are entered'
    }
    else{
      return (numerator)/(denominator)
    }
  }

  console.log('Statistics:',props)
  const totalReviews = props.stats.good + props.stats.neutral + props.stats.bad

  if(totalReviews===0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={props.stats.good} />
        <StatisticLine text="neutral" value={props.stats.neutral} />
        <StatisticLine text="bad" value={props.stats.bad} />
        <StatisticLine text="all" value={totalReviews} />
        <StatisticLine text="average" value={calculateAverage(props.stats, totalReviews)} />
        <StatisticLine text="positive" value={calculatePercentage(props.stats.good,totalReviews)} />
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  console.log(props)
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const App = () => {
  const handleGood = () => {
    console.log('Good was', good)
    const newGood = good + 1
    setGood(newGood)
    console.log('Good now', newGood)
  }

  const handleBad = () => {
    console.log('Bad was', bad)
    const newBad = bad + 1
    setBad(newBad)
    console.log('Bad now', newBad)
  }

  const handleNeutral = () => {
    console.log('Neutral was', neutral)
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    console.log('Neutral now', newNeutral)
  }

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  let stats = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics stats={stats} />
    </div>
  )
}

export default App
