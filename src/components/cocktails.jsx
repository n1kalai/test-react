import React, { useState, useEffect } from 'react';

const CocktailComponent = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data.drinks);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setCocktails([]);
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className='wrp'>
    <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search cocktails" />
    <div className='cocktailCont'>
      {cocktails.map((cocktail) => (
        <div className='cocktails' key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CocktailComponent;