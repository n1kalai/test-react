import React from "react";

const CocktailContainerCart = ({ cocktail:{strDrink, strDrinkThumb, strInstructions, idDrink}, onDelete, buttonTitle } ) => {
  
  return (
    <article className="cocktail-container">
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} />
      <button onClick={() => onDelete(idDrink)}>{buttonTitle}</button>
    </article>
  );
};

export default CocktailContainerCart;