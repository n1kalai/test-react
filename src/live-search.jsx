import React, { useState } from "react";
import { fetchCocktails } from "./api/cocktails";
import "./index.scss";
import AppWithFunction from "./AppWithClass.jsx";

const CocktailSearch = () => {
  const [inputText, setInputText] = useState("");
  const [cocktailData, setCocktailData] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSearch = () => {
    if (inputText !== "") {
      fetchCocktails(inputText, setCocktailData);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="cocktail-search">
      <div className="search-inp-butt">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {cocktailData && (
        <ul>
          {cocktailData.drinks.map((cocktail) => (
            <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
          ))}
        </ul>
      )}

      {/* {cocktailData && (
        <ul>
          {cocktailData.drinks.map((cocktail) => (
            <AppWithFunction
              key={cocktail.idDrink}
              cocktail={cocktail}
              //   handleClick={() => handleDelete(cocktail.idDrink)}
            />
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default CocktailSearch;
