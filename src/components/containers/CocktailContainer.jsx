import React from "react";
import styled from "styled-components";

const CocktailMainContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Article = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  background-color: #dadada;
  border-radius: 8px;
  border: 2px solid gray;
  margin-block: 5px;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Image = styled.img`
  width: 40%;
  margin-bottom: 10px;
`;

const Instructions = styled.p`
  color: #555;
  max-width: 500px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CocktailCocktailMainContainer = ({ cocktail: { strDrink, strDrinkThumb, strInstructions, idDrink }, addToCart, buttonTitle }) => {
  return (
    <CocktailMainContainer>
      <Article>
        <Title>{strDrink}</Title>
        <Image src={strDrinkThumb} alt={strDrink} />
        <Instructions>{strInstructions}</Instructions>
        <Button onClick={() => addToCart(idDrink)}>{buttonTitle}</Button>
      </Article>
    </CocktailMainContainer>
  );
};

export default CocktailCocktailMainContainer;
