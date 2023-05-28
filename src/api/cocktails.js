export const fetchCocktails = async () => {
	const cocktails = await fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
	);
	const jsonData = await cocktails.json();
	return jsonData.drinks;
};




// export const fetchCocktails = () => {
// 	return fetch(
// 		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
// 	)
// 		.then((res) => res.json())
// 		.then((data) => data.drinks);
// };
