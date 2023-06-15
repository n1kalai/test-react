import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, PostsContainer } from "./StyledComponents";




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
        <Container>
          {posts.map(({ id, title, body })=> (
            <PostsContainer key={id}>
                <div>
                <h2>{title}</h2>
              <p>{body}</p>
              
                </div>
            
              <Button onClick={() => handleNavigate(id)}>შემდეგი გვერდი</Button>
             
            </PostsContainer>
          ))}
        </Container>
      );

};