import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFatching1() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder1.typicode.com/posts/1')
        .then(resp =>{
            setLoading(false)
            setPost(resp.data)
            setError('')
        })
        .catch(err =>{
            setLoading(false)
            setPost({})
            setError('Error loading')
        })
    }, [])
    return (
        <div>
            {loading ? 'Loading': post.title}
            {error? error: null}
        </div>
    )
}

export default DataFatching1
