import { useEffect, useState } from "react";
import fetchCocktails from "./fetchcoctails";

export const UseCustomFetchHook = () => {
  const [coctails, setCoctails] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    fetchCocktails().then((res) =>
      setCoctails({ isLoading: false, data: res.drinks })
    );
  }, []);

  return { data: coctails.data, isLoading: coctails.isLoading };
};
