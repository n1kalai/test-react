export const CocktailContainer = ({
	cocktail: { strDrink, idDrink, strDrinkThumb, strInstructions },
	title,
	onDelete,
	buttontitle = "delete"
}) => (
	<article className="cocktail-container">
		<h2>{strDrink}</h2>
		<img src={strDrinkThumb} alt={title} />
		<p>{strInstructions}</p>
		<button onClick={() => onDelete(idDrink)}>{buttontitle}</button>
	</article>
);
