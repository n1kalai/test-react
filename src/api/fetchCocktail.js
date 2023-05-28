const fetchCocktail = async (cocktailName) => {
	const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+cocktailName);
	const jsonData = await response.json();
	return jsonData;
  };
  
  export default fetchCocktail;
  