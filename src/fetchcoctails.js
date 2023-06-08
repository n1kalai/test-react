const fetchCocktails = async () => {
  const cocktails = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );
  return cocktails.json();
};

export default fetchCocktails;
