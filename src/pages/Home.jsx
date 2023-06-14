import { useNavigate } from "react-router-dom"

const { useEffect, useState } = require("react")

export const Home = ()=>{

    const [posts,setPosts]=useState({
        isloading:true,
        isloaded:true,
        iserror:false,
        data:[]
    })
    const push = useNavigate()
    
    useEffect(()=>{
        handlefetch()
    },[])

    const handlefetch = async ()  =>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const dat = await res.json()
            setPosts({
                isloading:true,
                isloaded:true,
                iserror:false,
                data:dat
            })
        }catch{
            setPosts({
                isloading:true,
                isloaded:false,
                iserror:true,
                data:[]
            })

        }
       
        
    }


    const handlenavigate = (id)=>{
        push(`/Post/${id}`)
    }
   

    return(
        <div>
            {posts.data.map((ele)=>{
                return(
                    <>
                    <h1 key={ele.id}> {ele.title}</h1>
                    <p key={ele.id}> {ele.body}</p>
                    <button onClick={()=>handlenavigate(ele.id)}>post pages</button>
                    </>
                )
            })}
        </div>
    )
}