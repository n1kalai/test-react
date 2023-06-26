import { useDispatch } from "react-redux";
import { minusOneCocktail } from "../../features/cart/cartReducer";

export const CartItem = (props) => {
	const {
		cocktail: { strDrink, idDrink, strDrinkThumb, strInstructions, amount },
		title,
		buttonTitle = "delete item",
		onDelete,
		onAddCocktail,
		onMinusCocktail,
	} = props;

	const dispatch = useDispatch();

	const handleMinusCocktail = (cocktailId) =>
		dispatch(minusOneCocktail(cocktailId));

	return (
		<article className="cocktail-container">
			<h2>{strDrink}</h2>
			<img src={strDrinkThumb} alt={title} />
			<p>{strInstructions}</p>

			<footer style={{ display: "flex", justifyContent: "space-between" }}>
				<button onClick={() => onDelete(idDrink, props.cocktail)}>
					{buttonTitle}
				</button>
				<div>
					<button onClick={() => handleMinusCocktail(idDrink)}>-1</button>
					{amount}
					<button onClick={() => onAddCocktail(props.cocktail)}>+1</button>
				</div>
			</footer>
		</article>
	);
};
