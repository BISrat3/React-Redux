// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'

// const counterReducer = (state = initialState, action ) =>{
//     // indentifier - increment 
//     if (action.type === "increment"){
//         return {
//             counter:state.counter +1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "increase"){
//         return {
//             counter:state.counter + action.amount, 
//             // keep the existing counter it doesn't care about showCounter 
//             // redux doesnot merge the existing state with the new one  by default 
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "decrement"){
//         return {
//             counter:state.counter -1,
//             showCounter: state.showCounter
//         }
//     }
//     // to add new pieace of data to show or hide the counter 
//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter, 
//             counter: state.counter
//         }
//     }
//     // unless we can see unchanged state
//     return state
// }

    
// const store = createStore(counterReducer)
// since we have one redux store we only need to provide only once

// const store = createStore(counterSlice.reducer)
// in configure store it merges all reducer into one big reducer
const store = configureStore({
    reducer: {counter: counterReducer , 
            auth: authReducer
        }
        // reducer: {counter: counterSlice.reducer, 
        //     auth: authSlice.reducer
        // }
})

export default store

// const counterSubscriber = () =>{
//     const latestState = store.getState()
//         console.log(latestState)
// }

// store.subscriber(counterSubscriber)

// store.dispatch({type:'increment'})
// store.dispatch({type:'decrement'})