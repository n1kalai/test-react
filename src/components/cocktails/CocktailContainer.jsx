export const CocktailContainer = ({
	cocktail: { strDrink, idDrink, strDrinkThumb, strInstructions },
	title,
	onDelete,
	buttonTitle = "delete item",
}) => (
	<article className="cocktail-container">
		<h2>{strDrink}</h2>
		<img src={strDrinkThumb} alt={title} />
		<p>{strInstructions}</p>
		<button onClick={() => onDelete(idDrink)}>{buttonTitle}</button>
	</article>
);
