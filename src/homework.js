// ['https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg', 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg', 'https://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg', 'https://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg', 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg', 'https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg', 'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg', 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg', 'https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg', 'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg', 'https://www.thecocktaildb.com/images/media/drink/bmxmyq1630407098.jpg', 'https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg', 'https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg', 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg', 'https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg', 'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg', 'https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg', 'https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg', 'https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg', 'https://www.thecocktaildb.com/images/media/drink/92h3jz1582474310.jpg', 'https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg', 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg', 'https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg', 'https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg', 'https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg']

// Მოცემულია ერეიში სურათის ლინკები

// Დავალება 1 carousel-np 
// Შექმენით carousel  რომელსაც ექნება წინა და შემდეგ სურათზე გადასვლის ისრები, 
// გადასვლა გადმოსვლის ეფექტები არაა საჭირო
// Ღილაკებს დაადეთ ქლიქი რომელიც გადავა/გადმოვა ლინკებზე 
// (იუს ეფექტი ამ დავალებაში არაა საჭირო)

// Დავალება 2  slider-np
// Გამოიტანეთ ზემოთ მოცემული ერეიდან ყველა სურათი (პატარებად), რომელიმეზეე დაკლიკებისას ეგ სურათი აჩვენეთ დიდად, მაი აუტოს მსგავსი

import { useState } from "react";
import "./styles.css";
import leftarrow from "./photos/left-arrow.png";
import rightarrow from "./photos/right-arrow (1).png"
import { FaAdn, FaArrowLeft, FaArrowRight } from "react-icons/fa";


const arr =  ['https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg', 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg', 'https://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg', 'https://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg', 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg', 'https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg', 'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg', 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg', 'https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg', 'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg', 'https://www.thecocktaildb.com/images/media/drink/bmxmyq1630407098.jpg', 'https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg', 'https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg', 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg', 'https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg', 'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg', 'https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg', 'https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg', 'https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg', 'https://www.thecocktaildb.com/images/media/drink/92h3jz1582474310.jpg', 'https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg', 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg', 'https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg', 'https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg', 'https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg']

const Carousel = () => {

    const [pictures, setPictures] = useState(0)

    const handleClickNext = () => {
        
        if(pictures + 3 < arr.length){
            setPictures(pictures + 1)
        }
    }
    const handleClickBack = () => {    

        if(pictures != 0){
            setPictures(pictures - 1)
        }
    }

    let newArray = arr.slice(pictures, pictures + 3)
    return(
        <div className="maindiv">
        <div className="main">
        <button  className="button"  onClick={handleClickBack}>
            <FaArrowLeft/>
        </button>

            {newArray.map((el, ind) => (      
            <img className="img" src={el} key={ind}/>      
            ))}
        
        <button className="button" onClick={handleClickNext}>
            <FaArrowRight/>
        </button>
       
        
        </div>
        </div>    
    )
}
export default Carousel