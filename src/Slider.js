import { useState } from "react";

const images = ['https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg', 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg', 'https://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg', 'https://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg', 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg', 'https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg', 'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg', 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg', 'https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg', 'https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg', 'https://www.thecocktaildb.com/images/media/drink/bmxmyq1630407098.jpg', 'https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg', 'https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg', 'https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg', 'https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg', 'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg', 'https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg', 'https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg', 'https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg', 'https://www.thecocktaildb.com/images/media/drink/92h3jz1582474310.jpg', 'https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg', 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg', 'https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg', 'https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg', 'https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg']

const Slider = () => {
    const [bigIndex, setBigIndex] = useState(0);

    const expandImage = (ind) => {
        setBigIndex(ind);
    }

    return (
        <div className="main_container">
            <img src={images[bigIndex]} className="main_img" alt="bigimage" />
            <div className="sm_img_column">
                {images.map((element, ind) => (
                    <img src={element} 
                        key={ind} 
                        className="sm_img" 
                        style={{border: bigIndex === ind ? "solid 3px rgba(17, 17, 17, 0.689)" : null}}
                        alt="smallimage" 
                        onClick={() => expandImage(ind)} />
                ))}
            </div>
        </div>
    )
}

export default Slider;