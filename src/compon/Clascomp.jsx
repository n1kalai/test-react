import { Component } from "react"
import {butfect, datafetc} from '../Api/Api'




class Clascomp extends Component {
    constructor(){
    super()
        this.state={
            posts:{
                data:[],
                isLoading:true,
                isLoaded:false,
                isErorr:false
            }
        }  
    }



    async componentDidMount (){
        try{
            const post= await datafetc()
        
    this.setState({
        posts:{
            data:post,
            isLoading:false,
                isLoaded:true,
                isErorr:false
            
        }

    })
}
catch (err) {
    this.setState({
        posts:{
            data:[],
            isLoading:false,
            isLoaded:true,
            isErorr:true
        }
    })
}

}
render(){
    const {posts } =this.state;
    
    if (posts.isLoading){
        return <h1>please wait...</h1>
    }
    
    if(posts.isErorr){
        return <h1>404 Not Found</h1>
    }
    return (
            <>
            {posts.data.map((ele) => {
            const {title,body,Id}= ele
                return ( 
                <article key={Id}>
                    <h2>{body}</h2>
                    <p>{title}</p>
                   
                </article>
                )
            })}
            </>
    )

}
}
export default Clascomp