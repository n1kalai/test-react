import { Component } from "react";
import {fetchPost,fetchcommentsbyid} from "./api/Posts"

class Vizuali extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:{
                isloading:true,
                isloaded:false,
                iserror:false
            
            },
            comments:[]
        }

    }
    


    async componentDidMount(){
        try {
           const post = await fetchPost()
           this.setState({
            posts:{
                data:post,
                isloading:false,
                isloaded:true,
                iserror:false
            }
           })
            
        } catch (error) {
            this.setState({
                posts:{
                    data:[],
                    isloading:false,
                    isloaded:true,
                    iserror:true
                }
               })
            
        }
    }
    
    render(){
        const commenthandleclick =async(id)  =>{
            const comm = await fetchcommentsbyid(id)
            this.setState({
                comments:comm
            
        })
        console.log(this.state)
    }

        if(this.state.posts.isloading){
            return(<div>loading...</div>)

        }

        if(this.state.posts.iserror){
            return(<div>ERROR 404 not found</div>)
        }
        return(
            <section>
                 {this.state.posts.data.map((el)=>{
                return(<article key={el.id}>
                    <header>{el.title}</header>
                    <h2>{el.body}</h2>
                    <p>{this.state.comments.map((ele)=>{
                         {if(el.id===ele.postId){
                            return(<p>{ele.body}</p>)
                        }}
                    })}</p>
                    <button id={el.id}  onClick={()=>{
                        commenthandleclick(el.id)
                        
                    }}>see comments</button>

                   
                </article>)
            })}
            </section>
           
        )
    }
}


export default Vizuali