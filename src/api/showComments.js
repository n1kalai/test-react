const showComments = async (id) => {
	const getComments = await fetch("https://jsonplaceholder.typicode.com/posts/"+id+"/comments")
	const jsonData = await getComments.json();
	return jsonData;
};

export default showComments;