// const AdminHeaders = {
// 	user: <UserHeader />,
// 	admin: <AdminHeader />,
// };

import { Link, NavLink } from "react-router-dom";

export const Header = () => (
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

			<li>3</li>
			<li>4</li>
			<li>5</li>
		</ul>
	</nav>
);
// role = "admin"
// AdminHeaders[role]

// // if (role === "admin") {
// // 	return <Adminheader />;
// // }

// // if (role === "user") {
// // 	return <UserHeader />;
// // }
