import { useState,useEffect } from "react";
import { useNavigate,} from "react-router-dom";
import Skeleton from "../skeleton/LoadingPosts";
import Error from "../skeleton/ErrorPost";



const Main =()=>{

const push =useNavigate()


const [posts,setPosts]=useState({
    isLoading:true,
    isError:false,
    isLoaded:false,
    data:[],
})

useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched = await fetch("https://jsonplaceholder.typicode.com/posts");
        const resp = await fetched.json();
        if (!fetched.ok) {
          throw new Error("Failed loading data");
        }
        setPosts({
          isLoading: false,
          isError: false,
          isLoaded: true,
          data: resp,
        });
      } catch (error) {
        console.log(error.message);
        setPosts({
          isLoading: false,
          isError: true,
          isLoaded: false,
          data: [],
        });
      }
    };
    fetchData();
  }, []);

if(posts.isLoading){
return <Skeleton/>
}

if(posts.isError){
    return <Error/>
}

const handleNavigate = (id)=>{
    push(`/${id}`);
}

return(
    <main>
    {posts.data.map((post)=>{
        const {id,title,body,userId}=post;
        return(
            <div className="main_wrp" key={id}>
            <div className="user_wrp">
            <img src="https://www.011global.com/Account/Slices/user-anonymous.png" alt="user" />
            <h2>User ID: {userId}</h2>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={()=>handleNavigate(id)}>
                view details
            </button>
            </div>
        )
    })}

    </main>
)

}

export default Main;