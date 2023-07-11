import styled from "styled-components";
import axios from 'axios';
import { Fragment, useState, } from 'react';
import { CocktailContainer } from "./CocktailWrp";



const Container = styled.div`
  color: #fff;
  padding: 20px;
  form{
  margin-bottom: 20px;
  }
  input{
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    background-color: #444;
    color: #fff;
  }

  h1{
    font-size: 24px;
  }
`;


const StyledWrp=styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content:space-around;
align-items: center;
height:auto;
width:100vw; 

`


const fetchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const LiveSearch = () => {
	const [search, setSearch] = useState("");
	const [drinks, setDrinks] = useState({
		isLoading: false,
		isLoaded: false,
		isError: false,
		data: [],
	});
	const handleSearch = async (e) => {
		const { value } = e.target;

		setSearch(value);
		if (value.trim() === "") {
			setDrinks({
				isLoading: false,
				isLoaded: true,
				isError: false,
				data: [],
			});
			return;
		}

		setDrinks({
			isLoading: true,
			isLoaded: true,
			isError: false,
			data: [],
		});
		const response = await axios.get(fetchURL + value);

		const { drinks } = response.data;
		setDrinks({
			isLoading: false,
			isLoaded: true,
			isError: false,
			data: drinks || [],
		});
	};

	return (
        <div style={{minHeight:'85vh'}}>
		<Container>
			  <h2>Live Search</h2>
			<form>
				<input value={search} onChange={handleSearch} />
			</form>
			{drinks.isLoaded && drinks.data.length === 0 && <h1>No results</h1>}
			{drinks.isLoading && <div>loading...</div>}
			<StyledWrp>
				{drinks.data.map((cocktail) => (
					<CocktailContainer
						cocktail={cocktail}
						title={cocktail.strDink}
					/>
				))}
			</StyledWrp>
		</Container>
        </div>
	);
};


export default LiveSearch;


