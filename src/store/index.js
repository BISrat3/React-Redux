import {createStore} from 'redux'

const redux = require ('redux')

const counterReducer = (state = { counter:0}, action ) =>{
    if (action.type === "increment"){
        return {
            counter:state.counter +1
        }
    }
    if(action.type === "decrement"){
        return {
            counter : state.counter -1
        }
    }
    // unless we can see unchanged state
    return state
}

const store = redux.createStore(counterReducer)

// since we have one redux store we only need to provide only once
export default store

// const counterSubscriber = () =>{
//     const latestState = store.getState()
//         console.log(latestState)
// }

// store.subscriber(counterSubscriber)

// store.dispatch({type:'increment'})
// store.dispatch({type:'decrement'})