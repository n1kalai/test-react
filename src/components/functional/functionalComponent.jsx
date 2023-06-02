import { Component } from "react";

export const CocktailContainer = ({
    cocktail: { strDrink, idDrink, strDrinkThumb, strInstructions},
    title,
    onDelete,
}) => (
    <article className="cocktail-container">
        <h2>{strDrink}</h2>
        <img src={strDrinkThumb} alt="title" />
        <p>{strInstructions}</p>
        <button onClick={() => onDelete(idDrink)}>Delete</button>
    </article>
);