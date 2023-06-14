
import React, { useState, useEffect } from 'react';
import { useFetchCocktails } from './api/costumHooks';
import './App.css';
import CocktailContainer from './components/cocktails/CocktailContainer';


const defaultCocktails = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
}

const App = () => {

	const [cocktails, setCocktails] = useState(defaultCocktails);
    const cocktailsArr = useFetchCocktails();


	useEffect(() => {
		setCocktails({
			data: cocktailsArr,
			isLoading: false,
			isLoaded: true,
			isError: false,
		})
	}, [cocktailsArr]);   
	

	const handleDelete = (id)=>{
     const filteredArr=cocktails.data.filter((cocktail)=>cocktail.idDrink !== id);


	 setCocktails ({
		data:filteredArr,
		isLoading:false,
		isError:false,
		isLoaded:true

	 })
	};

	const showOdd = ()=>{
		const oddArry = cocktails.data.filter ((cocktail)=>{
			return cocktail.idDrink%2===1
		})

		setCocktails ({
			data:oddArry,
			isLoading:false,
			isLoaded:true,
			isError:false,
		})
	}

	const showEven = ()=>{
		const evenArry = cocktails.data.filter ((cocktail)=>{
			return cocktail.idDrink%2===0
		})

		setCocktails ({
			data:evenArry,
			isLoading:false,
			isLoaded:true,
			isError:false,
		})
	}


	const showOriginal = () => {
		setCocktails({
			data: cocktailsArr,
			isLoading: false,
			isLoaded: true,
			isError: false,
		})
	}
  

  if (cocktails.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (cocktails.isError) {
    return <h1>Error</h1>;
  }

  if (cocktails.data.length === 0) {
    return <h1>No cocktails found</h1>;
  }

  return (
    <>
	<CocktailContainer
	  cocktails={cocktails}
	  handleDelete={handleDelete}
	  showEven={showEven}
	  showOdd={showOdd}
	  showOriginal={showOriginal}

	/>
	</>
  );
}



export default App;



