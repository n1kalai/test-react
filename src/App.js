import { useEffect } from "react";
import CocktailContainer from "./components/cocktails/CocktailContainer";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, deleteCartItem, increment } from "./features/cartCounter/cartCountSlice";
import { fetchCocktails } from "./api/fetchCocktails";
import { addItems } from "./features/cocktailsFetch/cocktailSlice";
import CocktailContainerCart from "./components/cocktails/CocktailContainerCart";



const App = () => {
	const dispatch = useDispatch();
	const {isLoading, isError, data} = useSelector((state) => state.cocktails);
	const isCartShown = useSelector(state => state.cartcounter.showCartItems);
	const cartItems = useSelector(state => state.cartcounter.items);
	
	useEffect(() => {
		fetchCocktails().then(res => dispatch(addItems(res))) 
	}, [])

	const handleAddToCart = (cocktailId) => {
		dispatch(addCartItem({cocktailId, data}))
		dispatch(increment());
	}

	const handleDelete = (cocktailId) => {
		dispatch(deleteCartItem(cocktailId))
	}
	
	if(isLoading) return <div>Loading ...</div>;
	if(isError) return <div>Error ...</div>;
	
	return (
		<>
		<Header />

		{isCartShown && <section className="cart-container">
			{cartItems.map((cocktail) => (
				<CocktailContainerCart
					onDelete={handleDelete}
					key={cocktail.idDrink}
					cocktail={cocktail}
					buttonTitle = 'Remove'
				/>
			))}
		</section>}
		
		<section className="cocktails-container">
			{data.map((cocktail) => (
				<CocktailContainer
					addToCart={handleAddToCart}
					key={cocktail.idDrink}
					cocktail={cocktail}
					buttonTitle = 'Add to cart'
				/>
			))}
		</section>
		</>
	);
};
export default App;

// comment for git to commint
