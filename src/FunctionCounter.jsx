import React from 'react'

const FunctionCounter = () => {
    const [count, setCount] = React.useState(0)

    function handleIncrease() {
        setCount(prevCount => prevCount + 10)
      }
      function handleDecrease() {
        setCount(prevCount => prevCount - 10)
      }


  return (
    
       <div className="counter">
        <h2 className= "App-header">Functional Component</h2>
            <button className="counter--minus" onClick={handleIncrease}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={handleIncrease}>+</button>
    </div>
  )
}

export default FunctionCounter
