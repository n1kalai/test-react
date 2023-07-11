import styled from "styled-components";

const StyledCocktailContainer = styled.article`
  height:450px;
  width:400px;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  text-align:center;
  overflow:hidden;
  color:aliceblue;
  text-shadow: 0 0 5px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height:300px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

`;


export const CocktailContainer = (props) => {
	const {
		cocktail: { strDrink, strDrinkThumb, strInstructions },
		title,
	} = props;

	return (
		<StyledCocktailContainer >
			<h2>{strDrink}</h2>
			<img src={strDrinkThumb} alt={title} />
			<p>{strInstructions}</p>
		</StyledCocktailContainer>
	);
};