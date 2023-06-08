// import { useState, useEffect } from "react";
// import fetchCocktails from "./../../api/cocktails.js";

// export const useCocktails = () => {
//   const [cocktails, setCocktails] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showEvenCocktails, setShowEvenCocktails] = useState(false);
//   const [showOddCocktails, setShowOddCocktails] = useState(false);

//   useEffect(() => {
//     fetchCocktails()
//       .then((data) => {
//         setCocktails(data);
//         setIsLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const toggleEvenCocktails = () => {
//     setShowEvenCocktails((prevValue) => !prevValue);
//     setShowOddCocktails(false);
//   };

//   const toggleOddCocktails = () => {
//     setShowOddCocktails((prevValue) => !prevValue);
//     setShowEvenCocktails(false);
//   };

//   const filteredCocktails = cocktails.filter((cocktail) => {
//     if (showEvenCocktails) {
//       return cocktail.id % 2 === 0;
//     } else if (showOddCocktails) {
//       return cocktail.id % 2 !== 0;
//     } else {
//       return true;
//     }
//   });

//   return {
//     cocktails: filteredCocktails,
//     isLoading,
//     totalCocktails: cocktails.length,
//     toggleEvenCocktails,
//     toggleOddCocktails,
//   };
// };

import { useState, useEffect } from "react";
import fetchCocktails from "./../../api/cocktails.js";

export const useCocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCocktails()
      .then((data) => {
        setCocktails(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return {
    cocktails,
    isLoading,
    totalCocktails: cocktails.length,
  };
};
