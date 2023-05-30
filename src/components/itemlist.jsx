import LineItem from "./lineItem";

const ItemList =({items, handleCheck, handleDelete})=>{
    return (
        <ul>
        {items.map((itemm) => {
          const { id, item, checked } = itemm;
          return (
             <LineItem
             key={id}
             id={id}
             item={item}
             checked={checked}
             handleCheck={handleCheck}
             handleDelete={handleDelete}
             />
          );
        })}
      </ul>
    )
}


export default ItemList;