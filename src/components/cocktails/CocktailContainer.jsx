

const CocktailContainer = ({ cocktails, handleDelete, showEven, showOdd, showOriginal }) => {
	return (
	  <main className="cont">
		<h1>
  {cocktails.data.length === 1
    ? "1 Cocktail found"
    : `${cocktails.data.length} Cocktails found`}
</h1>
		<div>
		  {cocktails.data.map(({ idDrink, strDrink, strDrinkThumb, strInstructions }) => (
			<article key={idDrink}>
			  <img src={strDrinkThumb} alt={strDrink} />
			  <h2>{strDrink}</h2>
			  <p>{strInstructions}</p>
			  <button onClick={() => handleDelete(idDrink)}> X </button>
			</article>
		  ))}
		</div>
  
		<div className="btn-wrp">
		  <button onClick={showOdd}>Odd-ID</button>
		  <button onClick={showEven}>Even-ID</button>
		  <button onClick={showOriginal}>Original</button>
		</div>
	  </main>
	);
  };
  

  
  
  export default CocktailContainer;
