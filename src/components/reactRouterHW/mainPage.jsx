import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export const MainPageDiv = styled.div`
  background-color: rgba(63, 94, 251, 0.1);
`;

const PostDiv = styled.div`
  border-bottom: 3px solid green;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 10px 20px;

  & h1 {
    font-size: 24px;
    padding: 0;
    margin: 0;
  }

  & p {
    padding: 0;
    margin: 0;
  }

  & button {
    width: 150px;
    height: 40px;
    font-size: 16px;
    background-color: green;
    border: 3px solid white;
    border-radius: 8px;
    color: white;

    &:hover {
      background-color: white;
      color: green;
      border: 3px solid green;
    }
  }
`;

const MainPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const push = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  const handleNavigate = (id) => {
    push(`/${id}`);
  };

  return (
    <MainPageDiv>
      {posts.map((post) => {
        return (
          <PostDiv key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => handleNavigate(post.id)}>More Info</button>
          </PostDiv>
        );
      })}
    </MainPageDiv>
  );
};

export default MainPostsPage;
