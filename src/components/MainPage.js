import "./../index.css";
import { useState, useEffect } from "react";
import fetchingPosts from "./../api/fetchPosts";
import { useNavigate } from "react-router-dom";

const postsDefaultState = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
};


export const MainPage = () => {
    const [posts, setPosts] = useState(postsDefaultState);
    const push = useNavigate();

	useEffect(() => {
		handleFetchComments();
	}, []);

	const handleFetchComments = async () => {
		try {
			const fetchedComments = await fetchingPosts();
			setPosts({
				data: fetchedComments,
				isLoading: false,
				isLoaded: true,
				isError: false,
			});
		} catch(err) {
			setPosts({
				data: [],
				isLoading: false,
				isLoaded: true,
				isError: true,
			});
	}
	};

  const handleNavigate = (id) => {
		push(`/${id}`);
    };

  

	if (posts.isLoading) {
		return <h1 className="loading">იტვირთება...</h1>;
	}

	if(posts.isError) {
		return <h1 className="loading">შეცდომაა...</h1>
	}

	return (
		<div className="container">
			{posts.data.map((element) => {
				return (
					<div className="post-section" key={element.id}>
						<p className="post-text">POST</p>
						<h1>{element.title}</h1>
						<p>{element.body}</p>
						<button className="div-button" onClick={() => handleNavigate(element.id)}>
							More Info
						</button>
					</div>
				);
			})}
		</div>
	);
};