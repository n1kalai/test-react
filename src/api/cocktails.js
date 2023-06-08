import { useEffect, useState } from "react";

export const fetchCocktails = async () => {
	const cocktails = await fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
	);
	return cocktails.json();
};



// export const useFetchdata = (link, searchword) => {

// 	const [coctailsdata, setCocktailsdata] = useState([])

// 	useEffect (()  => {

// 				const response = fetch(
// 					link + searchword
// 				).then((data) => setCocktailsdata(
// 					data.json()
// 				))			
		
// 	}, []) 
// 	console.log(coctailsdata, "sss")


// 	return coctailsdata

// }

export const useFetchdata = (link, searchword) => {
	const [coctailsdata, setCocktailsdata] = useState([]);

	const fetchCocktailstwo = async (url, word) => {
		const cocktails = await fetch(
			url + word
		);
		return cocktails.json();
	};
  
	useEffect(() => {
	  const fetchData = async () => {
		const data = await fetchCocktailstwo(link, searchword ); 
		setCocktailsdata(data);
	  };
  
	  fetchData(); 
	}, [searchword]);
  
	console.log(coctailsdata, "sss");
  
	return coctailsdata;
  };
  

