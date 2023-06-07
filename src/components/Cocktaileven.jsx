import { useEffect, useState } from "react"
import { fetchCocktails } from "./../api/cocktails"
import "./../../src/App.css"

export const Cocktaileven = ()=>{

    const [cocktail,setCocktail] = useState({isloading:true,data:[]})
    const [filteredaray,setFilteredaray] = useState([])
   
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
    
    const dalshe = ()=>{
        const filtered = cocktail.data.filter(element => element.idDrink%2===0)
        setFilteredaray(filtered)
        console.log("sadfdf",filtered)
    

       
    }

    const rag =()=>{
        const filtered = cocktail.data.filter(element => element.idDrink%2===1)
        setFilteredaray(filtered)
        console.log("sadfdf",filtered)
    }
    useEffect(()=>{
        rag()
    },[cocktail])


// console.log(rag)
    if(cocktail.isloading){
        return <h1> LOADING... </h1>
    }
    return(<>
        <div className="container">
           
          {filteredaray.map((ele)=>{
            return (
                <article key={ele.idDrink} className="artikli">
           <img  className="suratebi" src={ele.strDrinkThumb} />
           <p>{ele.strInstructions}</p>
      </article>
            )
          })}
        </div>

        <button onClick={dalshe}> DAMAWHIRE</button>
       
        </>
    )



        }