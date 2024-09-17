import "./search.css";
import { useState, useEffect } from "react";
import fetchCocktail from "./api/fetchCocktail";

const LiveSearch = () => {
  const [cocktail, setCocktail] = useState("");
  const [foundCocktails, setFoundCocktails] = useState([]);

  const searchCocktail = async (cocktailName) => {
    try {
      const cocktailsData = await fetchCocktail(cocktailName);
      setFoundCocktails(cocktailsData.drinks || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (cocktail) {
      searchCocktail(cocktail);
    } else {
      setFoundCocktails([]);
    }
  }, [cocktail]);


  return (
    <div className="main_container">
      <input
        placeholder="Search Cocktail..."
        name="cocktail-search"
        value={cocktail}
        onChange={(e) => setCocktail(e.target.value)}
      />

     <div className="cocktails_article">
		    {foundCocktails.map((item) =>
          (<div class="text_div">
              <img src={item.strDrinkThumb} alt={item.title} />
              <div className="article_text">
                <h2>{item.strDrink}</h2>              
                <p>{item.strInstructions}</p> 
              </div> 
            </div>
          )
        )}
	    </div> 

      </div> 
  );
};

export default LiveSearch;
