import img from "../../img/ann.jpeg";
import styled from "styled-components";
import { Header } from "./Header";


const Sectioni=styled.section`
display:flex;
justify-content:center;
margin:0 auto;
height:730px;
background-color:#c0c0c08b;
border-radius:7px;


& img{
    width:500px;
    height:700px;
    z-index:-1;
    
} & h1{
    font-size:100px;
    margin-left:-180px;
    color:white;
   
   

}
`





export const AboutPage = () => {
  return (
    <Sectioni>



      <figure>
        <img src={img} alt="" />
      </figure>





      <div>
    <div>
      <h1>ABOUT US</h1>
    </div>
        <p>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          reprehenderit,<br/> enim ducimus provident necessitatibus cupiditate
          dignissimos voluptatem iste a et nobis<br/> mollitia facere accusamus natus
          delectus tempore soluta deserunt similique?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.  Temporibus
          reprehenderit,<br/> enim ducimus provident necessitatibus cupiditate
          dignissimos voluptatem iste a et nobis<br/> mollitia facere accusamus natus
          delectus tempore soluta deserunt similique? <br/> <br/><br/><br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          reprehenderit,<br/> enim ducimus provident necessitatibus cupiditate
          dignissimos voluptatem iste a et nobis<br/> mollitia facere accusamus natus
          delectus tempore soluta deserunt similique?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.  Temporibus
          reprehenderit,<br/> enim ducimus provident necessitatibus cupiditate
          dignissimos voluptatem iste a et nobis<br/> mollitia facere accusamus natus
          delectus tempore soluta deserunt similique? 
        </p>
      </div>
    </Sectioni>
  );
};
