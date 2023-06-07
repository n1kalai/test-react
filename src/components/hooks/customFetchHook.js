// custom-hook-homework

import { useState, useEffect } from "react";

export const useCocktailData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
                const fetchedData = await response.json();
                if (fetchedData.drinks) {
                    setData(fetchedData.drinks);
                } else {
                    setData([]);
                }
                setLoading(false);
            } catch (error) {
                console.log("Error:", error);
                setLoading(false);
            }
        };
        fetchCocktails();
    }, []);
    return { data, loading };
};

// custom-hook-homework