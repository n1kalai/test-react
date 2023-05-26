
// import { useEffect, useState } from "react"

// const   Userposts = () => {
//     const [postData,setPostData]= useState([])
//     const [postComent,setPostComent]=useState([])
//     const fetchedposts = async () => {
//     const result = await fetch  ('https://jsonplaceholder.typicode.com/posts')
//     const data = await result.json()
//     setPostData(data)
// } 
// const fetchComentsById = async (id) =>{
//     const fetchComents = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//     const comentData= await fetchComents.json() 
//     setPostComent(comentData)
    
    
// }

// useEffect (() =>{
//     fetchedposts()
// },[])


// return ( 
//     <>
//     { postData.map(ele => {
//         return (  <div  key={ele.id} className="main"> 
//         <h1>{ele.title}</h1>
//         <p>{ele.body}</p>
//         <button id={ele.id} onClick={(event)=>{ 
//             fetchComentsById(event.target.id)
//             }}>See Comments</button>
//                 {postComent.map(elem => {
//                     if(ele.id===elem.postId){
//     return (
//         <div> 
//         <h5>{elem.body}</h5>  
//         </div>
//     )}
// })}
//         </div>)
//     })}
//     </>
// )
// }

// export default Userposts