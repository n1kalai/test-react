export const Fetchdatathird = async () => {
	const fetchthird = await fetch(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const jsonData = await fetchthird.json();
	return jsonData;
};