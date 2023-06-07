 const CocktailContainer = ({
	cocktail: { strDrink, idDrink, strDrinkThumb, strInstructions },
	title,

}) => (
	<article className="cocktail-container">
		<h2>{strDrink}</h2>
		<img src={strDrinkThumb} alt={title} />
		<p>{strInstructions}</p>
		
	</article>
);

export default CocktailContainer;