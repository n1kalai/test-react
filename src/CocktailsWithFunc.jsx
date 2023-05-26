// task 1

import React, { useEffect, useState } from 'react';
import { fetchCocktails } from './api/cocktails';
import CocktailContainer from './components/cocktails/CocktailContainer';

const startingState = {
  data: [],
  isLoading: true,
  isLoaded: false,
  isError: false,
};

const CocktailsFunc = () => {
  const [cocktails, setCocktails] = useState(startingState);

  useEffect(() => {
    getCocktailsData();
  }, []);

  const getCocktailsData = async () => {
    try {
      const fetchedCocktails = await fetchCocktails();
      setCocktails({
        data: fetchedCocktails,
        isLoading: false,
        isLoaded: true,
        isError: false,
      });
    } catch (error) {
      setCocktails({
        data: [],
        isLoading: false,
        isLoaded: true,
        isError: true,
      });
    }
  };

  const handleDelete = (id) => {
    const filteredArr = cocktails.data.filter(
      (cocktail) => cocktail.idDrink !== id
    );
    setCocktails({
      data: filteredArr,
      isLoading: false,
      isLoaded: true,
      isError: false,
    });
  };

  if (cocktails.isLoading) {
    return <h1>იტვირთება...</h1>;
  }

  if (cocktails.isError) {
    return <h1>დაფიქსირდა შეცდომა</h1>;
  }

  if (!cocktails.data.length) {
    return <h1>კოქტეილები აღარ დარჩა</h1>;
  }

  return (
    <section className="cocktails-container">
      {cocktails.data.map((cocktail) => (
        <CocktailContainer
          key={cocktail.idDrink}
          onDelete={handleDelete}
          cocktail={cocktail}
        />
      ))}
    </section>
  );
};

export default CocktailsFunc;
