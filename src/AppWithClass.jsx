// import React, { useState, useEffect } from "react";
// import { fetchCocktails } from "./api/cocktails";
// import CocktailComponent from "./components/coctailComponent";

// const AppWithFunction = () => {
//   const [cocktails, setCocktails] = useState({
//     isLoading: true,
//     isLoaded: false,
//     isError: false,
//     data: [],
//   });

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const cocktailsData = await fetchCocktails();
//         setCocktails({
//           data: cocktailsData,
//           isLoading: false,
//           isLoaded: true,
//           isError: false,
//         });
//       } catch (error) {
//         setCocktails({
//           data: [],
//           isLoading: false,
//           isLoaded: true,
//           isError: true,
//         });
//       }
//     }
//     fetchData();
//   }, []);

//   const handleClick = (id) => {
//     const filteredCocktails = cocktails.data.filter(
//       (cocktail) => cocktail.idDrink !== id
//     );
//     setCocktails((prevCocktails) => ({
//       ...prevCocktails,
//       data: filteredCocktails,
//     }));
//   };

//   if (cocktails.isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (cocktails.isError) {
//     return <h1>Error...</h1>;
//   }

//   return (
//     <section className="cocktails-container">
//       {cocktails.data.map((cocktail, index) => (
//         <CocktailComponent
//           key={index}
//           cocktail={cocktail}
//           handleClick={() => handleClick(cocktail.idDrink)}
//         />
//       ))}
//     </section>
//   );
// };

// export default AppWithFunction;
