import React, { Component } from "react";

class CocktailContainer extends Component {
  render() {
    const { cocktail, handleClick } = this.props;

    const handleDeleteClick = () => {
      handleClick(cocktail.idDrink);
    };

    return (
      <article className="article-container">
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <p>{cocktail.strInstructions}</p>
        <button onClick={handleDeleteClick}>Delete me</button>
      </article>
    );
  }
}

export default CocktailContainer;
