import { useEffect, useState } from "react";
import { UseCustomFetchHook } from "./useFetchCoctails";

const Cocktails = () => {
  const { data, isLoading } = UseCustomFetchHook();
  const [filterCocktails, setFilterCocktails] = useState([]);
  const oddArray = data.filter((item) => item.idDrink % 2 === 1);
  useEffect(() => {
    setFilterCocktails(oddArray);
  }, [data]);

  const handleChangeToEven = () => {
    const evenCoctailsId = data.filter((item) => item.idDrink % 2 === 0);
    setFilterCocktails(evenCoctailsId);
  };
  return (
    <div>
      <h2 className="h2">რაოდენობა = {data.length}</h2>
      {isLoading
        ? "cocktails are loading "
        : filterCocktails.map((item) => <p>{item.idDrink}</p>)}
      <button className="btn" onClick={handleChangeToEven}>
        Click
      </button>
    </div>
  );
};

export default Cocktails;
