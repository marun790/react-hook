import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function DataFetchingOne() {

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [errorMeassage, setErrorMeassage] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setPost(res.data);
                setLoading(false);
                setErrorMeassage('')
            })
            .catch(err => {
                setErrorMeassage(err)
            })
    }, [])


    return (
        <div>
            {loading ? 'loading...' : post.title}
            {errorMeassage ? errorMeassage : null}
        </div>
    )
}
