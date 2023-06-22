import React from "react";

const CocktailContainer = ({ cocktail:{strDrink, strDrinkThumb, strInstructions, idDrink}, addToCart, buttonTitle } ) => {
  
  return (
    <article className="cocktail-container">
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} />
      <p>{strInstructions}</p>
      <button onClick={() => addToCart(idDrink )}>{buttonTitle}</button>
    </article>
  );
};

export default CocktailContainer;