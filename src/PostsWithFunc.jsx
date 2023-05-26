// task2

import React, { useState, useEffect } from "react";
import "../src/App.css";
import PostContainer from "./components/posts/PostsContainer";
import { fetchCommentsById } from "./api/comments";

const GetPosts = () => {
  const [postData, setPostData] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchedPosts = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await result.json();
      return data;
    } catch (error) {
      console.error("Error", error);
    }
  };

  const fetchComments = async (id) => {
    try {
      const commentsData = await fetchCommentsById(id);
      setPostComments((prevComments) => [...prevComments, ...commentsData]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchedPosts();
        setPostData(data);
        setIsLoading(false);
        setIsLoaded(true);
        setIsError(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsLoaded(true);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  const commClick = (id) => {
    fetchComments(id);
  };

  return (
    <section>
      {postData.map((post) => (
        <PostContainer key={post.id} post={post} onCommClick={commClick} />
      ))}
    </section>
  );
};

export default GetPosts;
