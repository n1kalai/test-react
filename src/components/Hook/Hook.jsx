import React, { useState, useEffect } from 'react';
import CocktailContainer from '../cocktails/CocktailContainer';
import {useFetchCocktails} from "./useFetchData"



const CocktailComponent = () => {


const [filteredArray, setFilteredArray] = useState ({
    data: []

})

const {data, isLoading} = useFetchCocktails()



   


const oddId = () => {
    const filteredCocktails = data?.drinks?.filter((el) => el.idDrink % 2 === 1);
    setFilteredArray({
        data: filteredCocktails,
       
    })

}

useEffect(() => {
    oddId();
},[data])

const evenId = () => {
    const filteredArray = data?.drinks?.filter((el) => el.idDrink % 2 === 0);
    setFilteredArray({
        data: filteredArray,
  
    })
};





if (isLoading) {
    return <h1>Loading...</h1>;
} 

  return (
    <div>
        
      {filteredArray?.data?.map(cocktail => (
        <CocktailContainer 
        key={cocktail.idDrink}
        cocktail={cocktail}/>
      ))}
 
     
      <div>
      <p>{`Data length:${data?.drinks?.length}`}</p>
        <button onClick={evenId}>Even Cocktails Id</button> 
      
        </div>

    </div>
 
  );
};




export default CocktailComponent ;











