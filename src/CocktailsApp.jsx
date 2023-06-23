import React from "react";
import CocktailContainer from "./components/containers/CocktailContainer";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, deleteCartItem, increment } from "./features/CartCountSlice";
import { fetchCocktails } from "./api/cocktails";
import { addItems } from "./features/CocktailSlice";
import { useEffect } from "react";
import CocktailContainerCart from "./components/containers/CartContainer";

const App = () => {
    const dispatch = useDispatch();
    const { isLoading, isError, data } = useSelector((state) => state.cocktails);
    const isCartShown = useSelector((state) => state.cartcount.showCartItems);
    const cartItems = useSelector((state) => state.cartcount.items);

    useEffect(() => {
        fetchCocktails().then((res) => dispatch(addItems(res)));
    }, [dispatch]);

    const handleAddToCart = (cocktailId) => {
        dispatch(addCartItem({ cocktailId, data }));
        dispatch(increment());
    };

    const handleDelete = (cocktailId) => {
        dispatch(deleteCartItem(cocktailId));
    };

    if (isLoading) return <div>Loading ...</div>;
    if (isError) return <div>Error ...</div>;

    return (
        <>
            {isCartShown && (
                <section>
                    {cartItems.map((cocktail) => (
                        <CocktailContainerCart
                            onDelete={handleDelete}
                            key={cocktail.idDrink}
                            cocktail={cocktail}
                            buttonTitle="Remove Item"
                        />
                    ))}
                </section>
            )}
            {data.map((cocktail) => (
                <CocktailContainer
                    addToCart={handleAddToCart}
                    key={cocktail.idDrink}
                    cocktail={cocktail}
                    buttonTitle="Add to cart"
                />
            ))}
        </>
    );
};

export default App;
