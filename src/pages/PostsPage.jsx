import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
    const { id } = useParams();
    const [ post, setPost ] = useState(null);
    const [ comments, setComments ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                const postData = await postResponse.json();
                setPost(postData);
            } catch (error) {
                console.log("Error", error);
            }
        };

        const fetchComments = async () => {
            try {
                const commentsResponse = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
                );
                const commentsData = await commentsResponse.json();
                setComments(commentsData);
                setLoading(false);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchPost();
        fetchComments();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div>
            {post ? (
                <div>
                    <h2>post: title, body...</h2>
                    <p className="post-title">{post.title}</p>
                    <p className="post-body">{post.body}</p>

                    <h2>comments: email, body</h2>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                            <p className="comment-mail">email: {comment.email}</p>
                            <p className="comment-body">body: {comment.body}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No posts</div>
            )}
        </div>
    );
};

export default PostPage;
