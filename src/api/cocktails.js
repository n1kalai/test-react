export const fetchCocktails = async (inputString, setResponseData) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputString}`
    );
    const data = await response.json();
    setResponseData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// export const fetchCocktails = () => {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
//   )
//     .then((res) => res.json())
//     .then((data) => data.drinks);
// };
