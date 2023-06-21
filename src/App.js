import { useEffect, useState } from "react";

import LearningContext from "./components/context/LearningContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import ProtectedRoute from "./components/PrivateRoute";
import { LoginModal } from "./components/LoginModal";
import { fetchCocktails } from "./api/cocktails";
import LiveSearch from "./components/Livesearch/LiveSearch";
import axios from "axios";
import { ReduxPlay } from "./pages/ReduxPlay";
import { setUser } from "./features/user/userReducer";
import { useDispatch } from "react-redux";

const staticPassword = "123";

export const App = () => {
	const [logIn, setLogIn] = useState({ name: "", password: "" });
	const [showLoginModal, setShowLoginModal] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			const parsedUser = JSON.parse(loggedInUser);
			dispatch(setUser(parsedUser));
		}
	}, []);

	const handleLogin = async () => {
		const { name, password } = logIn;

		if (password === staticPassword) {
			localStorage.setItem(
				"user",
				JSON.stringify({ ...logIn, isSignedIn: true })
			);

			// try {
			// 	await axios.post("http://gela.com", logIn);
			// } catch (err) {
			// 	console.log("error", err);
			// }

			setShowLoginModal(false);
			dispatch(setUser({ isSignedIn: true, name }));
		} else {
			alert("incorrect credentials");
		}
	};

	return (
		<BrowserRouter>
			<Header setShowLoginModal={setShowLoginModal} />
			{showLoginModal && (
				<LoginModal
					setLogIn={setLogIn}
					onLogin={handleLogin}
					onCloseModal={setShowLoginModal}
				/>
			)}
			<Routes>
				<Route path="/" element={<LearningContext />} />
				<Route path="/redux" element={<ReduxPlay />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/:id" element={<UserPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/cocktails" element={<LiveSearch />} />
				</Route>
				<Route path="*" element={<div>not GELA</div>} />
			</Routes>
		</BrowserRouter>
	);
};
