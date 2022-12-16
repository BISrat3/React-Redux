import React from 'react'
// use selector hook to select apart of managed by store
import { useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../store/counter'
import classes from './Counter.module.css'


export default function Counter() {

    const dispatch = useDispatch()
    // which pieaces of data we want to extract from the store
    // const counter = useSelector(state => state.counter)
    const counter = useSelector((state) => state.counter.counter)
    const show = useSelector((state) => state.counter.showCounter)

    const decrementHandler = () =>{
        // decrement - it is also identifier in index js
        // dispatch({type: 'decrement '})
        dispatch(counterActions.increment())
    }
    const incrementHandler = () =>{
        // increment - identifier  
        // dispatch({type: 'increment' })
        dispatch(counterActions.decrement())
    }
    const increaseHandler = () =>{
        // add extra payload /property 
        // dispatch({type: 'increase' , amount: 5 })
        dispatch(counterActions.increase(10))
    }

    // action is an object with type property 
    const toggleCounterHandler = () =>{
        // dispatch({type:'toggle'})
        dispatch(counterActions.toggleCounter())
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


// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);