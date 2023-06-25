import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SecondPage = () => {
  const { id } = useParams();
  const [posts, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchedPosts();
    fetchedComments();
  }, []);
  const fetchedPosts = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const Data = await res.json();
      setPost(Data);
    } catch (error) {}
  };

  const fetchedComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    const Data = await res.json();
    setComments(Data);
  };
  return (
    <div>
      <h1>{posts.title}</h1>
      <h3>{posts.body}</h3>

      {comments.map((com, id) => (
        <div key={id}>
          <p>{com.email}</p>
          <p>{com.body}</p>
        </div>
      ))}
    </div>
  );
};
export default SecondPage;
