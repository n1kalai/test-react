import { useEffect, useState } from "react"

export const fetchCocktail = async () => {
    const fetchedData=await  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
    return fetchedData.json()
}

export const CocktailsLoading = () => {
    const [Cocktails,setCocktails] = useState({isLoading:true, data:[]})
    useEffect(()=>{
        fetchCocktail().then((res)=>setCocktails({
            isLoading:false,
            data: res.drinks
        }))
        
    
    },[])
    return {data: Cocktails.data, isLoading: Cocktails.isLoading}
}