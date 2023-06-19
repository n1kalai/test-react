import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [post, setPost] = useState({
    isLoading: true,
    isLoaded: false,
    isError: false,
    data: [],
  });
  const nextPage = useNavigate();

  useEffect(() => {
    const PostFetch = async () => {
      try {
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const postsData = await posts.json();

        setPost({
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: postsData,
        });
      } catch (err) {
        setPost({
          isLoading: false,
          isLoaded: true,
          isError: true,
          data: [],
        });
      }
    };
    PostFetch();
  }, []);

  const NextPage = (id) => {
    nextPage(`/secondPage/${id}`);
  };

  return (
    <div>
      {post.data.map((pst) => (
        <div key={pst.id}>
          <h1>{pst.title}</h1>
          <p>{pst.body}</p>

          <button onClick={() => NextPage(pst.id)}>Next Page</button>
        </div>
      ))}
    </div>
  );
};
export default MainPage;
