import { useState, useEffect } from 'react';


export const useFetchCocktails=()=>{
    const [cocktails,setCocktails]=useState([]);

    useEffect (()=>{

   const fetchData= async ( ) =>{

try {

const response =await fetch ( 
    ' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita '
)

if (!response.ok){
    throw Error ('failed fetching data')
}

const data= await response.json()
setCocktails(data.drinks)


}catch (error) { 
console.error(error.message)
setCocktails([]);

}

   }    

fetchData()

    },[])

    return cocktails;
} 