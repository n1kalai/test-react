import { Component } from "react"


class Article extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {cocktail:{strDrink,strDrinkThumb,idDrink,strInstructions},onDel}=this.props
       
        return( <>
        <article className="article-container">
        <h2>{strDrink}</h2>
        <img src={strDrinkThumb} alt={strDrink} />
        <p>{strInstructions}</p>
        <button onClick={(e)=>{onDel(idDrink)}}>Delete me</button>
      </article>
      </>
      
    );
   
  }
}

export default Article
    
    
