export const fetchPost = async() => {
	const awaitpost = await fetch(
		"https://jsonplaceholder.typicode.com/posts"
	)
		const jsondata = await awaitpost.json()
        return jsondata
};

export const fetchcommentsbyid = async(id) => {
	const awaitcomment = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}/comments`
	)
		const jsondatacomment = await awaitcomment.json()
        return jsondatacomment
};


