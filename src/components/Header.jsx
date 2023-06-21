// const AdminHeaders = {
// 	user: <UserHeader />,
// 	admin: <AdminHeader />,
// };

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { setUser } from "../features/user/userReducer";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
`;

const getUser = (state) => state.user;

export const Header = ({ setShowLoginModal }) => {
	const dispatch = useDispatch();
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
							to="/redux"
						>
							redux
						</NavLink>
					</li>

					<li>4</li>
					<li>5</li>
				</ul>
			</nav>
			{user.isSignedIn ? (
				<div>
					welcome: {user.name}
					<button onClick={handleLogOut}>sign out</button>
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
