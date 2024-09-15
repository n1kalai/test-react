import React from "react";

const CocktailContainer = ({ cocktail, onDelete }) => {
  const { strDrink, strDrinkThumb, strInstructions, idDrink } = cocktail;

  return (
    <article className="cocktail-container">
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} />
      <p>{strInstructions}</p>
      <button onClick={() => onDelete(idDrink)}>Delete me</button>
    </article>
  );
};

export default CocktailContainer;