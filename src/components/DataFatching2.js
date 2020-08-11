import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {loading: true, error: '', post: {}}
const reducer = (state, action) => {
    switch(action.type){
        case 'Success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'Error':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function DataFatching2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(resp =>{
            dispatch({type: 'Success', payload: resp.data})
        })
        .catch(err =>{
            dispatch({type: 'Error'})
        })
    }, [])
    return (
        <div>
            {state.loading ? 'Loading': state.post.title}
            {state.error? state.error: null}
        </div>
    )
}

export default DataFatching2
