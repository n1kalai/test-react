export const fetchCocktails = async () => {
	const cocktails = await fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
	);
	const jsonData = await cocktails.json();
	return jsonData.drinks;
};

// git test
