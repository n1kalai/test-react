import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const PostsPage = () => {
const { id } = useParams();
const [post, setPost] = useState({});
const [comments, setComments] = useState([]);

    useEffect(() => {
        handleFetchPosts()
        handleFetchComments()
    }, []);

    const handleFetchPosts = async () => {
      try {
        const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postData = await response.json();
        setPost(postData);
        console.log(postData)
      }  catch (error) {
     
      }
     
       
    }

    const handleFetchComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const commentsData = await response.json();
        setComments(commentsData);
        console.log(commentsData)
    }


    const { title, body } = post;

    return (
        <div className="posts-container">
      <h1>{title}</h1>
      <h2>{body}</h2>
      <div> </div>
      {comments.map(({ id, email, body }) => (
        <div key={id}>
          <h3>{email}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
    )
}