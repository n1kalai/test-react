
import{FaTrashAlt} from "react-icons/fa";

const LineItem=({id,item,checked,handleCheck,handleDelete})=>{
    return(
        <li className="item">
        <input
        type="checkbox"
        checked={checked}
        onChange={()=>handleCheck(id)}
        />
        <label
        style={(item.checked)?{textDecoration:'line-through'}:null}
        onDoubleClick={()=>handleCheck(id)}
        >{item}</label>
        <FaTrashAlt 
        onClick={()=>handleDelete(id)}
        role="button" 
        tabIndex="0"
        aria-label={`Delete ${item}`}
        />
      </li>  
    )
}

export default LineItem;