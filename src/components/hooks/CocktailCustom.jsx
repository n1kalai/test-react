// custom-hook-homework

import React, { useState } from "react";
import "../../../src/App.css";
import { useCocktailData } from "./customFetchHook";

const CocktailTask = () => {
  const { data, loading } = useCocktailData();
  const [ showEven, setShowEven ] = useState(false);

  const dataQuantity = data.length;

  const handleShowEven = () => {
    setShowEven((prevValue) => !prevValue);
  };

  if (loading) {
    return (
      <div className="loading-box">
        <h2 id="loading-text">Loading.....</h2>
      </div>
    );
  }

  return (
    <div className="data-box">
      <div className="quantity-box">Total Data: {dataQuantity}</div>
      {data.map((cocktail, index) =>
        (index % 2 === 0 && !showEven) || (index % 2 === 1 && showEven) ? (
          <div key={cocktail.idDrink}>{cocktail.strDrink}</div>
        ) : null
      )}
      <button id="show-button" onClick={handleShowEven}>
        {showEven ? "Show Odd" : "Show Even"}
      </button>
    </div>
  );
};

export default CocktailTask;

// custom-hook-homework
