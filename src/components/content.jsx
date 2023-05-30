
import ItemList from "./itemlist";


const Content = ({items,handleCheck,handleDelete})=>{
 
return (
  <main>
    {items.length?(
      <ItemList
       items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
      />
    ):(
        <h2 style={{marginTop:'2rem'}}> your list is empty </h2>
        )}
  </main>
);

}


export default Content;