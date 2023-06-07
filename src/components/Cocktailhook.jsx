import { useEffect, useState } from "react"
import { fetchCocktails } from "./../api/cocktails"
import "./../../src/App.css"

export const Cocktailhook = ()=>{

    const [cocktail,setCocktail] = useState({isloading:true,data:[]})
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        const dat =  await fetchCocktails()
        
        try{
            setCocktail({isloading:false,data:dat.drinks})

        }catch(error){
            setCocktail({isloading:true,data:[]})
        }
        console.log(dat)

    }
    // fetchdata()

    if(cocktail.isloading){
        return <h1> LOADING... </h1>
    }
    return(
        <div className="container">
            <h1 className="raodenoba">{cocktail.data.length}</h1>
          {cocktail.data.map((ele)=>{
            return(
                <article key={ele.idDrink} className="artikli">
                     <img  className="suratebi" src={ele.strDrinkThumb} />
                     <p>{ele.strInstructions}</p>
                </article>
           
            )
          })}
        </div>
    )



        }