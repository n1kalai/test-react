import React, { useState } from "react";
import { useCocktails } from "./coctaiHook.jsx";

const CocktailDisplay = () => {
  const { cocktails, isLoading, totalCocktails } = useCocktails();
  const [showFilteredCocktails, setShowFilteredCocktails] = useState(true);

  const toggleCocktails = () => {
    setShowFilteredCocktails((prevValue) => !prevValue);
  };

  const filteredCocktails = showFilteredCocktails
    ? cocktails.filter((cocktail) => cocktail.id % 2 === 0)
    : cocktails.filter((cocktail) => cocktail.id % 2 !== 0);

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        Total Cocktails: {totalCocktails}
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button onClick={toggleCocktails}>
            {showFilteredCocktails
              ? "Show Odd Cocktails"
              : "Show Even Cocktails"}
          </button>

          <ul>
            {filteredCocktails.map((cocktail) => (
              <li key={cocktail.id}>{cocktail.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CocktailDisplay;
