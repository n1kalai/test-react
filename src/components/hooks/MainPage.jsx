import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "./Header"


export const MainPage = () => { 
    const [post,setPost]= useState({
        isLoading:true,
        isLoaded:false,
        isError:false,
        data:[]
    })



    useEffect(()=>{
        const handlePostFetch = async () => { 
            try {
            const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const postsData = await posts.json()
            setPost({
                isLoading:false,
                isLoaded:true,
                isError:false,
                data:postsData
            })
        }catch (err){
            setPost({
                isLoading:false,
                isLoaded:true,
                isError:true,
                data:[]
            })
        }
    
    }
    handlePostFetch()
    
},[]);

const push = useNavigate()
const handleNavigate = (id) => {
    push (`/${id}`)
}

return (
<section>
{post.data.map((ele)=>(
    <div key={ele.id}>
        <h1>{ele.title}</h1>
        <h2>{ele.body}</h2>
        <button onClick={()=>handleNavigate(ele.id)}>See Comments</button>
    </div>
))}
</section>

)


} 