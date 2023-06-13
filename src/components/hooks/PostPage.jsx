import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const PostPage = () => { 
    const [comment,setComment]=useState({
        isLoading:true,
        isLoaded:false,
        isError:false,
        data:[]
    })
    const {id}=useParams()


useEffect(()=>{
    const fetchCom = async () => {
        try{
        const  com = await fetch (`https://jsonplaceholder.typicode.com/comments/${id}`)
        const comData= await com.json()
        setComment({
            isLoading:false,
            isLoaded:true,
            isError:false,
            data:[comData]

        })
    }catch(err){
        setComment({
            isLoading:false,
            isLoaded:true,
            isError:true,
            data:[]

        })
    }
    }
    fetchCom()
},[])



return (
    <section>
<h1>This is Comments Page</h1>
<div>
    {comment.data.map((ele)=>{
        return (
            <>
            <h1>{ele.email}</h1>
            <h2>{ele.body}</h2>
            </>
        )
    })}
</div>

    </section>



)

}