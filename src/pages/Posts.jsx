import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Posts = ()=>{

    const {id} = useParams()

    const [postid,setPostid]=useState({
        data:{}
    })
    const [comment,setComment] = useState({
        commentdata:[]
    })




    useEffect(()=>{
        handlefetchrame()
        fetchcomments()
    },[id])


    const handlefetchrame = async ()=>{
        try {
            const resu = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const dat = await resu.json()
            setPostid({data:dat})
            
        } catch (error) {
            setPostid({
                data:{}
            })
        }
    }

    const fetchcomments = async ()=>{
        try {
            const rame = await fetch (` https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            const datarame = await rame.json()
            setComment({
                commentdata:datarame
            })
            
        } catch (error) {
            setComment({
                commentdata:[]
            })
            
        }

    }


    return (
        <div>
            <h1>{postid.data.title}</h1>
            <p>{postid.data.body}</p>

            <div>
                {comment.commentdata.map((ele)=>{
                    return(
                        <>
                        <h2> {ele.email}</h2>
                        <p>{ele.body}</p>
                        </>
                    )
                })}
            </div>
        </div>

    )
}