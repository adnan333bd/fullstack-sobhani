import { useState } from 'react'
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100

  if (all === 0) {
    return <div>No feedback given</div>
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive + ' %'} />
        </tbody>
      </table>
    )
  }
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackRaiser = (type) => {
    if (type === 'good') {
      return () => {
        setGood(good + 1)
      }
    } else if (type === 'neutral') {
      return () => {
        setNeutral(neutral + 1)
      }
    } else {
      return () => {
        setBad(bad + 1)
      }
    }
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={feedbackRaiser('good')} text='good' />
      <Button onClick={feedbackRaiser('neutral')} text='neutral' />
      <Button onClick={feedbackRaiser('bad')} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
