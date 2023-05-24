import { Component } from "react";

// const CocktailContainer2 = ( { cocktail, title, onDelete }) => {

// }

export class CocktailContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { cocktail, title, onDelete } = this.props;
		const { strDrink, strDrinkThumb, strInstructions, idDrink } = cocktail;

		return (
			<article className="cocktail-container">
				<h2>{strDrink}</h2>
				<img src={strDrinkThumb} alt={title} />
				<p>{strInstructions}</p>
				<button onClick={() => onDelete(idDrink)}>Delete me</button>
			</article>
		);
	}
}
