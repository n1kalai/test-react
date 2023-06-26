

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const MainPage = () => {
    const push = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    const hendleChangePost = (id) => {
        push(`/${id}`)
    }
    return (
           
            posts.map(post => {
                return (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => hendleChangePost(post.id)} >See post </button>
                </div>)
            })
       
    )



}
export default MainPage;   
