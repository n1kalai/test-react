import { useEffect, useState } from "react";

export const useFetchCocktails = () => {
	const [cocktails, setCocktails] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
				);
				const jsonData = await response.json();
				setCocktails(jsonData.drinks);
			} catch (error) {
				console.error("Error fetching cocktails:", error);
				setCocktails([]);
			}
		};

		fetchData();
	}, []);

	return cocktails;
};
