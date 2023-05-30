import Content from './content';
import Header from './header';
import Footer from './footer';
import AddItem from './addItem';
import SearchItem from './search';
import { useState } from 'react';


function TodoList() {
const [items,setItems]=useState(JSON.parse(localStorage.getItem('to-do-list')));

const [newItem,setNewItem]=useState('')
const [search, setSearch] = useState('')


const setAndSaveItems =(newItems) =>{
  setItems(newItems);
  localStorage.setItem('to-do-list',JSON.stringify(newItems));
}

const addItem =(item)=>{
  const id=items.length? items[items.length-1].id+1:1;
  const myNewItem={id, checked:false,item };
  const listItems =[...items,myNewItem];
  setAndSaveItems(listItems);
  
}

const handleCheck=(id)=>{
  const listItems=items.map(item=>item.id===id?{...item,checked:!item.checked}:item);
  setAndSaveItems(listItems);
  }
  
  
  const handleDelete =(id)=>{
      const listItems=items.filter(item=>item.id!==id);
      setAndSaveItems(listItems);
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItem)return;
    addItem(newItem);
     setNewItem('');
  }

  
  return (
  
      <div className='todo'>
      <Header title="To-Do List"/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <Content
     items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
     handleCheck={handleCheck}
     handleDelete={handleDelete}
     />

     <Footer length={items.length}/>
     </div>
  
  );
}

export default TodoList;