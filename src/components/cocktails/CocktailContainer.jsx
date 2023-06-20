import React from "react";
import { increment } from "../../features/cartCounter/cartCountSlice";
import { useDispatch } from "react-redux";

const CocktailContainer = ({ cocktail, addToCart }) => {
  const { strDrink, strDrinkThumb, strInstructions } = cocktail;
  const dispatch = useDispatch();

  return (
    <article className="cocktail-container">
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} />
      <p>{strInstructions}</p>
      <button onClick={() => dispatch(increment())}>Add to cart</button>
    </article>
  );
};

export default CocktailContainer;