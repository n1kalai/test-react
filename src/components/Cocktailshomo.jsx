import {Component} from "react";

export class Cocktailshomo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {cocktail} = this.props;
        return (
        <article className="cocktail-container" key={cocktail.idDrink}>
							<h2>{cocktail.strDrink}</h2>
							<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
							<p>{cocktail.strInstructions}</p>
							<button onClick={(e) => this.handleClick(cocktail.idDrink)}>
								Delete me
							</button>
						</article>
                        )
    }
}
