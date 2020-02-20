import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    post: {},
    error: '',
    loading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCES':
            return {
                ...state,
                post: action.payload,
                error: '',
                loading: false
            }
        case 'FETCH_FAIL':
            return {
                ...state,
                error: 'Something went wrong',
                loading: false
            }
        default:
            return state;
    }
}

export default function DataFetchTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCES', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_FAIL', error: err })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}
