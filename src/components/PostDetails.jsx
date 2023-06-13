import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const postDefault = {
	data: {},
	isLoading: true,
	isLoaded: false,
	isError: false,
};

const commentsDefault = {
    data: {},
	isLoading: true,
	isLoaded: false,
	isError: false,
}

export const PostDetails = () => {
    const [post, setPost] = useState(postDefault);
    const [comment, setComment] = useState(commentsDefault);
    const { id } = useParams();
    const push = useNavigate();

    const handleNavigateBack = () => {
        push(-1);
    }

    useEffect(() => {
        handleFetchPost();
    }, []);

    const handleFetchPost = async () => {
        const getPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const getComments = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)	
        const jsonPostData = await getPost.json();
        const jsonCommentsData = await getComments.json();
        try {
            setPost({
                data: jsonPostData,
                isLoading: false,
                isLoaded: true,
                isError: false,
            })
            setComment({
                data: jsonCommentsData,
                isLoading: false,
                isLoaded: true,
                isError: false,
            })
        } catch(err) {
            setPost({
                data: {},
                isLoading: false,
                isLoaded: true,
                isError: true,
            })
            setComment({
                data: {},
                isLoading: false,
                isLoaded: true,
                isError: false,
            })
        }
	};

    if (post.isLoading) {
		return <h1 className="loading">იტვირთება...</h1>;
	}

	if(post.isError) {
		return <h1 className="loading">შეცდომაა...</h1>
	}
    console.log(post.data)
    return (
        <div className="post-section">
            <h1>{post.data.title}</h1>
            <p>{post.data.body}</p>
            
            <p className="comment-section">COMMENTS</p>
			<h2>{comment.data.name}</h2>
			<p>{comment.data.body}</p>
											

            <button onClick={handleNavigateBack}  className="div-button">Back</button>
        </div>
    )

}