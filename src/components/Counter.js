import React from 'react'
// use selector hook to select apart of managed by store
import { useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css'


export default function Counter() {

    const dispatch = useDispatch()
    // which pieaces of data we want to extract from the store
    const counter = useSelector(state => state.counter)
    const show = useSelector(state => state.showCounter)

    const decrementHandler = () =>{
        // decrement - it is also identifier in index js
        dispatch({type: 'decrement '})
    }
    const incrementHandler = () =>{
        // increment - identifier  
        dispatch({type: 'increment' })
    }
    const increaseHandler = () =>{
        // add extra payload /property 
        dispatch({type: 'increase' , amount: 5 })
    }

    // action is an object with type property 
    const toggleCounterHandler = () =>{
        dispatch({type:'toggle'})
    }

  return (
   <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
