const showComments = async (id) => {
	return fetch(
		"https://jsonplaceholder.typicode.com/posts/"+id+"/comments"
	)
		.then((res) => res.json())
		.then((data) => data);
};

export default showComments;