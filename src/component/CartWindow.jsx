import { useSelector } from "react-redux"




 const CartWindow = ()=>{
    const cartsele=useSelector(state=>state.cart)
    
    return (
<div>

    {cartsele.cart.map(ele =>{
        return(
        <div>
        <div>{ele.idDrink}</div>
        <img src={ele.strDrinkThumb} alt="" />
        <p>{ele.strCategory}</p>
        </div>)
    })}
</div>
    )
}
export default CartWindow