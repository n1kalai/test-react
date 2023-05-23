const fetchingComments = async () => {
	return fetch(
		"https://jsonplaceholder.typicode.com/posts "
	)
		.then((res) => res.json())
		.then((data) => data);
};

export default fetchingComments;