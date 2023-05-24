import logo from "./logo.svg";
import "./App.css";
import { Languages } from "./components/Languages";
import { useState, useEffect } from "react";
import { fetchCocktails } from "./cocktail/cocktails";
import CocktailArticle from "./CocktailComponent"

const cocktailsDefaultStatee = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
};

const App = () => {
  const [number, setNumber] = useState();
  const [name, setName] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    handleFetchCocktails();
  }, []);

  const handleFetchCocktails = async () => {
    try {
      const fetchedCocktails = await fetchCocktails();
      setCocktails(fetchedCocktails);
    } catch (err) {
      console.error("Error", err);
      setCocktails([]);
    }
  };

  const onClick = () => {
		// setNumber((previosValue) => previosValue + 1);
		setName(Math.random());
	};

  const handleClick = (id) => {
    const updatedCocktails = cocktails.filter((cocktail) => cocktail.idDrink !== id);
    setCocktails(updatedCocktails);
  };

  if (cocktails.length === 0) {
    return <h1>იტვირთება...</h1>;
  }

  return (
    <div>
     
      <CocktailArticle cocktails={cocktails} handleClick={handleClick} />
    </div>
  );
};

export default App;
