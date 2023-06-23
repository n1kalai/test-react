import { useEffect } from "react";
import { fetchCocktails } from "../api/cocktails";
import { addCartItem, addItems } from "../features/cocktails/cocktailsReducer";
import { useDispatch, useSelector } from "react-redux";
import { CocktailContainer } from "../components/cocktails/CocktailContainer";
export const CocktailsWithCart = () => {
	const dispatch = useDispatch();
	const { isLoading, isError, data } = useSelector(
		(state) => state.cocktails.cocktails
	);

	useEffect(() => {
		fetchCocktails().then((res) => dispatch(addItems(res.drinks)));
	}, []);

	const handleAddToCart = (cocktailId) => {
		dispatch(addCartItem(cocktailId));
	};

	if (isLoading) return <div>loading ...</div>;
	if (isError) return <div> error ...</div>;

	return (
		<div className="cocktails-container">
			{data.map((cocktail) => (
				<div className="cocktails-container">
					<CocktailContainer
						onDelete={handleAddToCart}
						cocktail={cocktail}
						title={cocktail.strDink}
						buttonTitle="Add to cart"
					/>
				</div>
			))}
		</div>
	);
};
