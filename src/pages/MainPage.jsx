import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.log("Error", error);
            }
        }
        fetchPosts();
    }, []);

    const push = useNavigate();
    const handleNavigate = (postId) => {
        push(`/post/${postId}`)
    };

    return (
        <section>
            {posts.map((post) => (
                <article className="article-container" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button id="view-post-btn" onClick={() => handleNavigate(post.id)}>View Post</button>
                </article>
            ))}
        </section>
    )
}

export default MainPage;