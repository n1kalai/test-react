const fetchingComments = async () => {
	const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
	const jsonData = await posts.json();
	return jsonData;
};

export default fetchingComments;