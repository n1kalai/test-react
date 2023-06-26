// const AdminHeaders = {
// 	user: <UserHeader />,
// 	admin: <AdminHeader />,
// };

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    list-style: none;
  }
`;
export const Header = () => (
  <HeaderStyled>
    <ul>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active more-classname " : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>

      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </HeaderStyled>
);
// role = "admin"
// AdminHeaders[role]

// // if (role === "admin") {
// // 	return <Adminheader />;
// // }

// // if (role === "user") {
// // 	return <UserHeader />;
// // }
