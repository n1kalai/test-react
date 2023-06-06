import React, { useEffect, useState } from "react";
import { useFetchCocktails } from "./api/cocktails";
import CocktailContainer from "./components/cocktails/CocktailContainer";

const defaultCocktails = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
}

const App = () => {
	const [cocktails, setCocktails] = useState(defaultCocktails);

	const cocktailsArray = useFetchCocktails();

	useEffect(() => {
		setCocktails({
			data: cocktailsArray,
			isLoading: false,
			isLoaded: true,
			isError: false,
		})
	}, [cocktailsArray]);
	


	const handleDelete = (id) => {
		const filteredArr = cocktails.data.filter(
			(cocktail) => cocktail.idDrink !== id
		);
		setCocktails({
			data: filteredArr,
			isLoading: false,
			isLoaded: true,
			isError: false,
		});
	};

	const showOddNumId = () => {
		const newOddNumArray = cocktailsArray.filter((element) => element.idDrink % 2 === 1);
		setCocktails({
			data: newOddNumArray,
			isLoading: false,
			isLoaded: true,
			isError: false,
		})
	}

	const showRoundNumId = () => {
		const newRoundNumArray = cocktailsArray.filter((element) => element.idDrink % 2 === 0);
		setCocktails({
			data: newRoundNumArray,
			isLoading: false,
			isLoaded: true,
			isError: false,
		})
	}

	const showOriginalData = () => {
		setCocktails({
			data: cocktailsArray,
			isLoading: false,
			isLoaded: true,
			isError: false,
		})
	}

	if (cocktails.isLoading) {
		return <h1>Loading...</h1>;
	}

	if (cocktails.isError) {
		return <h1>error</h1>;
	}

	if (!cocktails.data.length) {
		return <h1>No cocktails found</h1>;
	}

	return (
		<div  className="main_cont">			
			<section className="cocktails-container">
				{cocktails.data.map((cocktail) => (
					<CocktailContainer
						onDelete={handleDelete}
						key={cocktail.idDrink}
						cocktail={cocktail}
					/>
			))}
			</section>
			<div className="right_cont">
				<p className="data_length">{cocktails.data.length}</p>
 				<button className="odd_but" onClick={showOddNumId}>Odd numbere ID</button>
				<button className="odd_but" onClick={showRoundNumId}>Round numbere ID</button>
				<button className="odd_but" onClick={showOriginalData}>Show all Cocktails</button>
			</div>
		</div>
	);
};

export default App;




// import { useState } from "react";
// import { useFetchCocktails } from "./api/cocktails";
// import CocktailContainer from "./components/cocktails/CocktailContainer";

// const App = () => {	
// 	const [cocktails, setCocktails] = useState({
// 		data: [],
// 		isLoading: true,
// 		isLoaded: false,
// 		isError: false,}); 

// 	const newCocktailsArr = useFetchCocktails();
// 	console.log(newCocktailsArr)
// 	setCocktails({data: newCocktailsArr,
// 		isLoading: true,
// 		isLoaded: false,
// 		isError: false,});

// 	const handleDelete = () => {

// 	}

// 	const showOddNumId = () => {
// 	}


// 	if (!cocktails.data.length) {
// 		return <h1>No cocktails found</h1>;
// 	}

// 	// const newArray = cocktails.data.filter((element) => element.idDrink % 2 === 0);

	

// 	return (
// 		<div className="main_cont">
// 			<section className="cocktails-container">
// 			{cocktails.data.map((cocktail) => (
// 					<CocktailContainer
// 						onDelete={handleDelete}
// 						key={cocktail.idDrink}
// 						cocktail={cocktail}
// 					/>
// 				))}				
// 			</section>
// 			<div>
// 				<p className="data_length">{cocktails.data.length}</p>
// 				<button className="odd_but" onClick={showOddNumId}>Odd numbere ID</button>
// 			</div>
// 		</div>
// 	);
