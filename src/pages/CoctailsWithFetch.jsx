import { useEffect } from "react"
import { fetchCocktails } from "../api/cocktails"
import { addCardItem, addItems } from "../Features/coctailsReducer";
import {useDispatch, useSelector} from "react-redux"
import { CocktailContainer } from "../components/cocktails/CocktailContainer";

export const CoctailsWithFetch = () => {
    const dispatch = useDispatch();
    const {isLoading, isError, data} = useSelector(state => state.cocktails.cocktails);


console.log(isLoading, isError, data)

    useEffect(() => {

        fetchCocktails().then((res) => dispatch(addItems(res.drinks)))

    }, []);

    const handleAddToCard = (coctailsid) => {

        console.log(coctailsid)
        dispatch(addCardItem(coctailsid))

    }

    // if (isLoading) {
    //     return <div>is loading</div>;
    //   }
      
    //   if (isError) {
    //     return <div>error</div>;
    //   }
      
      return (
        <div>
          {data.map((cocktail) => (
            <div key={cocktail.id} className="cocktails-container">
              <CocktailContainer
                onDelete={handleAddToCard}
                cocktail={cocktail}
                title={cocktail.strDrink}
                buttontitle = "add to card"
              />
            </div>
          ))}
        </div>
      );
          }      