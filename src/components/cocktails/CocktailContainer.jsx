export const CocktailContainer = (props) => {
	const {
		cocktail: { strDrink, idDrink, strDrinkThumb, strInstructions },
		title,
		onDelete,
		buttonTitle = "delete item",
	} = props;

	return (
		<article className="cocktail-container">
			<h2>{strDrink}</h2>
			<img src={strDrinkThumb} alt={title} />
			<p>{strInstructions}</p>
			<button onClick={() => onDelete(idDrink, props.cocktail)}>
				{buttonTitle}
			</button>
		</article>
	);
};
