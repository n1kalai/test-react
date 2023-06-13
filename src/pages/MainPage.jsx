import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 export const MainPage = () => {
    const [posts, setPosts] = useState([]);
    const push = useNavigate()

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
            console.log(data)
          } catch (error) {
            setPosts({
              data: [],
              isLoading: false,
              isLoaded: true,
              isError: true,
            });
          }
        }
    
        fetchData();
      }, []);

      const handleNavigate = (id) =>{
     push(`/post/${id}`)
      }

   
    return (
        <div className="container">
          {posts.map(({ id, title, body })=> (
            <div className="posts" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
              
              <button className="button" onClick={() => handleNavigate(id)}>შემდეგი გვერდი</button>
             
            </div>
          ))}
        </div>
      );

};