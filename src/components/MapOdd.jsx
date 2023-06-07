import { useEffect, useState } from "react"
// import {fetchCocktail} from "./hooks/Loading.js"


// const MapOddEven =  () => {
  

//     const [cockt,setCockt]= useState({data:[]})
   
//     useEffect(()=>{

//         fetchgin()
    
//     },[])

//     const fetchgin = async ()=> { 
//         const resu = await fetchCocktail()
    
//         try{
//             setCockt({data:resu.drinks})
//         }
//         catch{
//             setCockt({data:[]})
//         }
        
//     }
//     return (

//         <div>

//     {cockt.data.map((ele)=>{
//     if(
//         ele.idDrink % 2 ===1
//     ){
//         const {idDrink,strDrink,strInstructions}=ele
//         return (
//             <div>
//            {idDrink},{strDrink},{strInstructions}
            
//             </div>
//         )
//     }
// })}
        
// </div>
//     )

// }
    
//     export default MapOddEven


// onclikze luwi id-ebit gamotana



const CocktailList = () => {
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
        const data = await result.json();
        setDrinks(data.drinks);
      } catch (error) {
        
      }
    };

    fetchData();
  }, []);

  const filterDrinks = () => {
    const evenDrinks = drinks.filter(drink => drink.idDrink % 2 === 0);
    setFilteredDrinks(evenDrinks);
  };

  return (
    <div>
    
      <button onClick={filterDrinks}>Show Even Drinks</button>
      
        {filteredDrinks.map(drink => (
         <div> {drink.idDrink},{drink.strDrink}</div>
        ))}
      
    </div>
  );
};

export default CocktailList;
