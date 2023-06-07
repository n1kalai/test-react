// import { useEffect, useState } from "react"
// import { fetchCocktails } from "../../api/cocktails"

// export const useFetchCocktails = () => {
//     const [cocktails,setCocktails] = useState({isLoading: true, data: []})

//     useEffect(() => {
//         fetchCocktails()
//                 .then((res) => setCocktails({
//                     isLoading: false,
//                     data: res.drinks
//                 }))
               
//     }, [])

//     return {data: cocktails.data, isLoading: cocktails.isLoading}
// }