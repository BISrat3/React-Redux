import React from 'react'
// use selector hook to select apart of managed by store
import { useSelector } from 'react-redux'
import './Counter.module.css'
export default function Counter() {
    // which pieaces of data we want to extract from the store
    const counter = useSelector(state => state.counter)

    const toggleCounterHandler = () =>{}
  return (
   <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <div>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
