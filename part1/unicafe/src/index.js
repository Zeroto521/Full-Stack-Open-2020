import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Button } from './components/Button'
import { Counter } from './components/Counter'
import { Title } from './components/Title'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral

  return (
    <div>
      <Title name={'give feedback'} />
      <Button name={'good'} func={setGood} value={good} />
      <Button name={'neutral'} func={setNeutral} value={neutral} />
      <Button name={'bad'} func={setBad} value={bad} />

      <Title name={'statistics'} />
      <Counter name={'good'} number={good} />
      <Counter name={'neutral'} number={neutral} />
      <Counter name={'bad'} number={bad} />
      <Counter name={'all'} number={all} />
      <Counter name={'average'} number={(good - bad) / all} />
      <Counter name={'positive'} number={String(good / all * 100) + ' %'} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)