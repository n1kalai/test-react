export const fetchCocktails = async () => {
	const cocktails = await fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
	);
	const fetchedData = await cocktails.json();
	return fetchedData.drinks;
};