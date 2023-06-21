
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./Store/CartSlice";
import CartWindow from "./CartWindow";




const Reduxx = () => {
    const [data, setData] = useState([]);
   const showWindow = useSelector(state=>state.cart.show)
    const dispatch=useDispatch()
 
  
    const fetchData = async () => {
      try {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const response = await res.json();
        setData(response.drinks);      
       
      }catch (err) {
        console.log('Error:', err);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  const addCartHandler= (post) =>{
    dispatch(cartAction.addToCart(post))

  }
    return (
        <div key={data}>
    { showWindow &&   <CartWindow/>}
    
        {data.map((post) => (
          
          <div key={post.id}>
              <h1>{post.strDrink}</h1>
            <img src={post.strDrinkThumb}  alt="" className="images"/>
            <p>{post.strCategory}</p>
            <button onClick={()=>addCartHandler(post)}>ADD TO KALATA</button>
          </div>
          
        ))}
      </div>
    );
  };
  
  export default Reduxx;
  
  