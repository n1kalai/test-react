import "./App.css";
import "./style.css"
import { useState, useEffect } from "react";
import fetchingComments from "./api/comments";
import showComments from "./api/showComments";

const commentsDefaultState = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
};


const App = () => {
	const [posts, setPostss] = useState(commentsDefaultState);
    const [newComments, setNewComments] = useState({});
	useEffect(() => {
		handleFetchComments();
	}, []);

	const handleFetchComments = async () => {
		try {
			const fetchedComments = await fetchingComments();
			setPostss({
				data: fetchedComments,
				isLoading: false,
				isLoaded: true,
				isError: false,
			});
		} catch(err) {
			setPostss({
				data: [],
				isLoading: false,
				isLoaded: true,
				isError: true,
			});
	}
	};

  const onClick = async (id) => {
		try {
			const getComment = await showComments(id);
			setNewComments((prevComments) => ({
				...prevComments,
				[id]: getComment,
			}));
		} catch (err) {
			console.log(err);
		}
	};

  

	if (posts.isLoading) {
		return <h1>იტვირთება...</h1>;
	}

	if(posts.isError) {
		return <h1>შეცდომაა...</h1>
	}

	return (
		<div className="container">
			{posts.data.map((element) => {
				return (
					<div className="post-section" key={element.id}>
						<p className="post-text">POST</p>
						<h1>{element.title}</h1>
						<p>{element.body}</p>
						<button className="div-button" onClick={() => onClick(element.id)}>
							Comments
						</button>
						{newComments[element.id] && (
							<div className="shown-comments">
								<p className="post-text">COMMENTS</p>
								{newComments[element.id].map((comment) => (
									<div key={comment.id}>										
										<h2>{comment.name}</h2>
										<p>{comment.body}</p>
									</div>
								))}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default App;

// comment for git to commint
