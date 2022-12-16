import {createStore} from 'redux'

const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action ) =>{
    // indentifier - increment 
    if (action.type === "increment"){
        return {
            counter:state.counter +1,
            showCounter: state.showCounter
        }
    }
    if (action.type === "increase"){
        return {
            counter:state.counter + action.amount, 
            // keep the existing counter it doesn't care about showCounter Redux will now merge that by default 
            showCounter: state.showCounter
        }
    }
    if (action.type === "decrement"){
        return {
            counter:state.counter -1,
            showCounter: state.showCounter
        }
    }
    // to add new pieace of data to show or hide the counter 
    if(action.type === 'toggle'){
        return {
            showCounter: !state.showCounter, 
            counter: state.counter
        }
    }
    // unless we can see unchanged state
    return state
}

    
const store = createStore(counterReducer)

// since we have one redux store we only need to provide only once
export default store

// const counterSubscriber = () =>{
//     const latestState = store.getState()
//         console.log(latestState)
// }

// store.subscriber(counterSubscriber)

// store.dispatch({type:'increment'})
// store.dispatch({type:'decrement'})