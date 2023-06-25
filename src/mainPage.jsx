import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, H1 } from "./styledcomponent";
import { Postdiv } from "./styledcomponent";

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
        <Postdiv key={pst.id}>
          <h1>{pst.title}</h1>
          <p>{pst.body}</p>

          <Button onClick={() => NextPage(pst.id)}>Next Page</Button>
        </Postdiv>
      ))}
    </div>
  );
};
export default MainPage;
