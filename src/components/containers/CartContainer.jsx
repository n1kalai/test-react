import React from "react";
import styled from "styled-components";

const CartMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartSecContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 20px;
  background-color: #2c0028;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ffffff;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff3300;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #b30000;
  }
`;

const CocktailContainerCart = ({ cocktail: { strDrink, strDrinkThumb, idDrink }, onDelete, buttonTitle }) => {
  return (
    <CartMainContainer>
      <CartSecContainer>
        <Title>{strDrink}</Title>
        <Image src={strDrinkThumb} alt={strDrink} />
        <Button onClick={() => onDelete(idDrink)}>{buttonTitle}</Button>
      </CartSecContainer>
    </CartMainContainer>
  );
};

export default CocktailContainerCart;
