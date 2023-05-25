import { Component } from "react";

//! class component
// export class CocktailContainer extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		const { cocktail, title, onDelete } = this.props;
// 		const { strDrink, strDrinkThumb, strInstructions, idDrink } = cocktail;

// 		return (
// 			<article className="cocktail-container">
// 				<h2>{strDrink}</h2>
// 				<img src={strDrinkThumb} alt={title} />
// 				<p>{strInstructions}</p>
// 				<button onClick={(e) => onDelete(idDrink)}>Delete me</button>
// 			</article>
// 		);
// 	}
// }

//! function component

const CocktailContainer = (props) => {
  const { cocktail, title, onDelete } = props;
  const { strDrink, strDrinkThumb, strInstructions, idDrink } = cocktail;

  return (
    <article className="cocktail-container">
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={title} />
      <p>{strInstructions}</p>
      <button onClick={(e) => onDelete(idDrink)}>Delete me</button>
    </article>
  );
};

export default CocktailContainer;
