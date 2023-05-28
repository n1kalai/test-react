export const CocktailContainer = ({
	cocktail: { strDrink, idDrink, strDrinkThumb, strInstructions },
	onDelete,
}) => {
	console.log('CocktailContainer:', strDrink, idDrink, strDrinkThumb, strInstructions);
	return(
		<article className="cocktail-container">
		<h2>{strDrink}</h2>
		<img src={strDrinkThumb} />
		<p>{strInstructions}</p>
		<button onClick={() => onDelete(idDrink)}>Delete me</button>
	</article>
	)

}
 
