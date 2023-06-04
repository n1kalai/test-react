import { useState } from "react";

const urls = [
  "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
  "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  "https://www.thecocktaildb.com/images/media/drink/sih81u1504367097.jpg",
  "https://www.thecocktaildb.com/images/media/drink/rrqrst1477140664.jpg",
  "https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg",
  "https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg",
  "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
  "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg",
  "https://www.thecocktaildb.com/images/media/drink/b7qzo21493070167.jpg",
  "https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
  "https://www.thecocktaildb.com/images/media/drink/bmxmyq1630407098.jpg",
  "https://www.thecocktaildb.com/images/media/drink/utpxxq1483388370.jpg",
  "https://www.thecocktaildb.com/images/media/drink/3jm41q1493069578.jpg",
  "https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
  "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
  "https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg",
  "https://www.thecocktaildb.com/images/media/drink/vcyvpq1485083300.jpg",
  "https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg",
  "https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg",
  "https://www.thecocktaildb.com/images/media/drink/92h3jz1582474310.jpg",
  "https://www.thecocktaildb.com/images/media/drink/xnzc541493070211.jpg",
  "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
  "https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg",
  "https://www.thecocktaildb.com/images/media/drink/xk79al1493069655.jpg",
  "https://www.thecocktaildb.com/images/media/drink/3h9wv51504389379.jpg",
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < urls.length) {
      setIndex((prevIndex) => prevIndex + 1);
      return;
    }
    setIndex(0);
  };
  const handleBack = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      return;
    }
    setIndex(urls.length - 1);
  };

  return (
    <div className="main-div">
      <button onClick={handleBack} className="btn">
        Back
      </button>
      <img className="img" src={urls[index]} alt="drinks" />
      <button onClick={handleNext} className="btn">
        Next
      </button>
    </div>
  );
}
export default Carousel;
