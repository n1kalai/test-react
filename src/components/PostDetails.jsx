import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../Error";
import SkeletonContent from "./skeletonContent";
import Dots from "./Dots";

const PostDetails=()=>{

    const [post,setPost]=useState({
     data: {},
	isLoading: true,
	isLoaded: false,
	isError: false,
    })

    const [comment,setComment]=useState({
        data: {},
        isLoading: true,
        isLoaded: false,
        isError: false,
    })

    const { id } = useParams();
    const push = useNavigate();


    useEffect (()=>{

        const FetchPostAndComment = async () => {
            try {

                const fetchedPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const fetchedComment = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)	
                const postResp = await fetchedPost.json();
                const commentResp = await fetchedComment.json();

                if (!fetchedPost.ok){
                    throw new Error ('failed loading data')
                }
                if (!fetchedComment.ok){
                    throw new Error ('failed loading data')
                }

                setPost({
                    data: postResp,
                    isLoading: false,
                    isLoaded: true,
                    isError: false,
                })
                setComment({
                    data: commentResp,
                    isLoading: false,
                    isLoaded: true,
                    isError: false,
                })
            
            } catch(error) {

                setPost({
                    data: {},
                    isLoading: false,
                    isLoaded: true,
                    isError: true,
                })
                setComment({
                    data: {},
                    isLoading: false,
                    isLoaded: true,
                    isError: false,
                })
            console.log(error.message)
             
            }
        };
    
        FetchPostAndComment()

    },[])

    if (post.isLoading) {
         
        return (
            <div>
              <Dots />
              <SkeletonContent />
            </div>
          );    
        
	}

	if(post.isError) {
		return <Error/>
	}

    const handleNavigateBack = () => {
        push(-1);
    }


    return(
       <div className="details_wrp">
        <h1>{post.data.title}</h1>
        <p>{post.data.body}</p>
        <h2>Comments:</h2>
        <div className="comment_wrp">
        <img src="https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-11639594348fn8rlcxrqo.png?v=2023060922" alt="user" />
        <h3>{comment.data.name}</h3>
        </div>
        
        <p>{comment.data.body}</p>
        <button onClick={handleNavigateBack}>Back</button>
       </div>
    )
}


export default PostDetails;