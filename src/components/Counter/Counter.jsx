import React from 'react'
import { useState } from 'react'
import "./Counter.scss"



const Counter = () => {
    const [count, setCount]=useState(0);
    const changeCount = (number) => {
        setCount(count + number);
    }
      return (
    <div classname="counter-details">
        <span className="count">{count}</span>
        <div className='buttons'>
            <button className='button' onClick={() => changeCount(1)}>+</button>
            <button className='button' onClick={() => changeCount(-1)}>-</button>
        </div>    
    </div>

  )
}

export default Counter