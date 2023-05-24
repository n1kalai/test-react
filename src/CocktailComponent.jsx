import React from "react";

const CocktailArticle = ({ cocktails, handleClick }) => {
  return (
    <section className="cocktails-container">
      {cocktails.map((cocktail, index) => {
        return (
          <article className="cocktail-container" key={cocktail.idDrink}>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strInstructions}</p>
            <button onClick={(e) => handleClick(cocktail.idDrink)}>
              Delete me
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default CocktailArticle;
