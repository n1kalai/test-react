import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../features/CartCountSlice";

const Header = () => {
  const HeaderWrapper = styled.header`
    height: 110px;
    background-color: rgb(154, 164, 255);

    & nav {
      display: flex;
      justify-content: space-between;
      margin-left: 50px;
      margin-right: 50px;
    }

    & h1 {
      margin-top: 40px;
    }

    & img {
      width: 30px;
    }

    & p {
      font-size: 20px;
    }
  `;

  const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    gap: 40px;
    & li {
      list-style-type: none;
    }

    & a {
      color: black;
      text-decoration: none;
      font-size: 20px;
    }
  `;

  const CartButton = styled.button`
    background-color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    width: 100px;

    &:hover {
      background-color: #f2f2f2;
    }
  `;

  const counter = useSelector((state) => state.cartcount);
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <nav>
        <h1>Redux HW</h1>
        <Ul>
          <li>
            <a href=".">Home</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <div>
            <CartButton onClick={() => dispatch(showCart())}>Cart: {counter.showNum && counter.items.length}</CartButton>
          </div>
        </Ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
