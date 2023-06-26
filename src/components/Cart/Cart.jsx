import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
	addCartItem,
	deleteItem,
	minusOneCocktail,
	showCart,
} from "../../features/cart/cartReducer";
import { NotFound } from "../../pages/NotFound";
import { CartItem } from "../cocktails/CartItem";

const FixedCart = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	width: 1200px;
	max-width: 100%;
	border-left: solid 2px black;
	border-left-top-radius: 15px;
	border-left-bottom-radius: 15px;
	background-color: white;
	bottom: 0;
	z-index: 1;
	overflow: scroll;
	display: flex;
	flex-direction: column;
	padding: 10px;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const Cart = () => {
	const dispatch = useDispatch();

	const data = useSelector((state) => state.cart.cartItems);

	const handleCloseCart = () => dispatch(showCart());

	const handleDeleteItem = (id) => dispatch(deleteItem(id));

	const handleAddCocktail = (cocktail) => dispatch(addCartItem(cocktail));

	return (
		<>
			<FixedCart className="cocktails-container">
				<button onClick={handleCloseCart}>X</button>
				{data.length > 0 ? (
					data.map((cocktail) => (
						<div key={cocktail.idDrink} className="cocktails-container">
							<CartItem
								onDelete={handleDeleteItem}
								onAddCocktail={handleAddCocktail}
								// onMinusCocktail={handleMinusCocktail}
								cocktail={cocktail}
								title={cocktail.strDink}
								buttonTitle="remove from cart"
							/>
						</div>
					))
				) : (
					<NotFound />
				)}
			</FixedCart>
		</>
	);
};
