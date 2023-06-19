import axios from "axios";

export const fetchCocktails = async () => {
	// const cocktails = await fetch(
	// 	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
	// );
	const cocktails = await axios.get(
		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
	);
	return cocktails.data;
};

// export const fetchCocktails = () => {
// 	return fetch(
// 		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
// 	)
// 		.then((res) => res.json())
// 		.then((data) => data.drinks);
// };
