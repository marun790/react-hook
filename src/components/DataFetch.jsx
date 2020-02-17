import React,{useState, useEffect} from 'react'
import axios from 'axios'



export default function DataFetch() {
    const[post, setPost] = useState({});
    const[id, setId] = useState(0);
    const[idFromButtonClick, setIdFromButtonClick] = useState(0);

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res => {
           console.log(res);
           setPost(res.data);
       })
       .catch((err) => {
           console.log(err);
       })     
    }, [idFromButtonClick])

    const handleButtonClick = () => {
        console.log('inside handleButtonClick', id);
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <input type = 'text' value={id} onChange = {e => setId(e.target.value)} />
            <button onClick={() => handleButtonClick()}>Get Post</button>
            {/* <ul>
                {
                    posts.map(post => <li key = {post.id}>{post.title}</li>)
                }
            </ul> */}
            {post.title}
        </div>
    )
}
