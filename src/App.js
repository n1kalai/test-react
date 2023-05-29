import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [findCocktails, setFindCocktails] = useState("");

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${findCocktails}`
        );

        const data = await res.json();

        setCocktails(data.drinks || []);
        console.log(data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCocktails();
  }, [findCocktails]);

  return (
    <div>
      <input
        placeholder="search cocktail..."
        className="input"
        type="search"
        onChange={(e) => setFindCocktails(e.target.value)}
      />
      <div className="all-cocks">
        {cocktails
          .filter((cocktail) => {
            if (findCocktails === "") {
              return cocktail;
            } else if (
              cocktail.strDrink
                .toLowerCase()
                .includes(findCocktails.toLocaleLowerCase())
            ) {
              return cocktail;
            }
          })
          .map((cocktail) => (
            <div key={cocktail.idDrink}>
              <h1>{cocktail.strDrink}</h1>
              <p>{cocktail.strCategory}</p>
              <img className="img" src={cocktail.strDrinkThumb} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
