import React, {useReducer} from 'react'
import CompAA from './CompAA';
import CompB from './CompB';
import CompC from './CompC';



export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state
    }
}


function ContextReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{count1: count, dispatch1: dispatch}}>
        <div>
            Count - {count}
            <CompAA />
            <CompB />
            <CompC />
        
      </div>
      </CountContext.Provider>
    )
}

export default ContextReducer
