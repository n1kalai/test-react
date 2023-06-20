import { useEffect } from "react";
import CocktailContainer from "./components/cocktails/CocktailContainer";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "./features/cocktailsFetch/cocktailSlice";
import { increment } from "./features/cartCounter/cartCountSlice";



const App = () => {
	const dispatch = useDispatch();
	const cocktails = useSelector((state) => state.cocktails);

	useEffect(() => {
		dispatch(fetchCocktails());
	  }, [dispatch]);

	return (
		<>
		<Header />
		
		<section className="cocktails-container">
			{cocktails.map((cocktail) => (
				<CocktailContainer
					addToCart={increment}
					key={cocktail.idDrink}
					cocktail={cocktail}
				/>
			))}
		</section>
		</>
	);
};
export default App;
