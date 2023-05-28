import React from "react";

class Article extends React.Component {
  
  handleDelete = () => {
    const { cocktail, handleClick } = this.props;
    handleClick(cocktail.idDrink);

  };

  render() {
    const { cocktail } = this.props;

    return (
      <article className="cocktail-container">
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <p>{cocktail.strInstructions}</p>
        <button onClick={this.handleDelete}>Delete me</button>
      </article>
    );
  }
}

export default Article;