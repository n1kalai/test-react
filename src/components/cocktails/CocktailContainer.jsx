export const CocktailContainer = ( { cocktail, title, onDelete }) => {

	
	const{strDrink,strDrinkThumb,strInstructions,idDrink}=cocktail
	// console.log(cocktail)

	
	return (
		<article className="cocktail-container">
			<h2>{strDrink}</h2>
			<img src={strDrinkThumb} alt={title} />
			<p>{strInstructions}</p>
			<button onClick={() => onDelete(idDrink)}>Delete me</button>
		</article>
	);

}
