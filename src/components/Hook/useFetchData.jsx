import { useEffect, useState } from "react"
import  fetchCocktails  from "../../api/cocktails.js"

export const useFetchCocktails = () => {
    const [cocktails,setCocktails] = useState({isLoading: true, data: []})
    
    useEffect(() => {
        fetchCocktails()
                .then((res) => setCocktails({
                  
                    isLoading: false,
                    isLoaded: true,
                    isError: false,
                    data: res
                }))
               
    }, [])

    return {data: cocktails.data, isLoading: cocktails.isLoading}
}