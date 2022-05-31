import React, { useState } from 'react'

import './styles.scss'

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0)

  return (<div className={'functional-component'}>
    <div className={'functional-component__hello-word'}>Hello Word!<br/><i>With love from Func Component</i></div>
    <div className={'functional-component__counter'}>
      <span>Current value: {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  </div>)
}

export default FunctionalComponent
