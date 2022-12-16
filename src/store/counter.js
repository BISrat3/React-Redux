import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice ({
    // preparing a slice of our global state (e.g authentication state... ) identify that state property 
    name: 'counter',
    initialCounterState, 
    // reducer is look like a map 
    reducers: {
        //  methods
        increment (state){
            // we are allowed to mutate state
            state.counter++
        },
        decrement (state) {
            state.counter--
        },
        increase (state, action) {
            // state.counter = state.counter + action.amount
            state.counter = state.counter + action.payload
        },
        toggleCounter (state) {
            state.showcounter = !state.showCounter
        },
    },
})

export const counterActions = counterSlice.actions; 

export default counterSlice.reducer