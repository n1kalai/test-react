// const AdminHeaders = {
// 	user: <UserHeader />,
// 	admin: <AdminHeader />,
// };

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { setUser } from "../features/user/userReducer";
import { showCart } from "../features/cocktails/cocktailsReducer";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
	& nav ul {
		display: flex;
		list-style: none;
		gap: 10px;
	}
`;

const getUser = (state) => state.user;

export const Header = ({ setShowLoginModal }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cocktails.cartItems);

	const handleShowSignIn = () => {
		setShowLoginModal(true);
	};

	const user = useSelector(getUser);

	const handleLogOut = () => {
		localStorage.removeItem("user");
		dispatch(setUser({ isSignedIn: false, name: "" }));
	};

	return (
		<StyledHeader>
			<nav>
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
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active more-classname " : ""
							}
							to="/cocktails"
						>
							cocktails
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active more-classname " : ""
							}
							to="/cocktails-cart"
						>
							Cocktails With Cart
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active more-classname " : ""
							}
							to="/redux"
						>
							Redux Started
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active more-classname " : ""
							}
							to="/context"
						>
							Context
						</NavLink>
					</li>
				</ul>
			</nav>

			{user.isSignedIn ? (
				<div>
					welcome: {user.name}
					<button onClick={handleLogOut}>sign out</button>
					<button onClick={() => dispatch(showCart())}>
						Cart {cartItems.length}
					</button>
				</div>
			) : (
				<button onClick={handleShowSignIn}>sign in</button>
			)}
		</StyledHeader>
	);
};
// role = "admin"
// AdminHeaders[role]

// // if (role === "admin") {
// // 	return <Adminheader />;
// // }

// // if (role === "user") {
// // 	return <UserHeader />;
// // }
