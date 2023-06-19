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

const staticPassword = "123";

const userr = {
	isSignedIn: false,
	name: "",
};

export const App = () => {
	const [user, setUser] = useState(userr);
	const [logIn, setLogIn] = useState({ name: "", password: "" });
	const [showLoginModal, setShowLoginModal] = useState(false);

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			const parsedUser = JSON.parse(loggedInUser);
			setUser(parsedUser);
		}
	}, []);

	const handleLogin = async () => {
		const { name, password } = logIn;

		if (password === staticPassword) {
			localStorage.setItem(
				"user",
				JSON.stringify({ ...logIn, isSignedIn: true })
			);

			try {
				await axios.post("http://gela.com", logIn);
			} catch (err) {
				console.log("error", err);
			}

			setShowLoginModal(false);
			setUser({ isSignedIn: true, name });
		} else {
			alert("incorrect credentials");
		}
	};

	return (
		<BrowserRouter>
			<Header
				user={user}
				setUser={setUser}
				setShowLoginModal={setShowLoginModal}
			/>
			{showLoginModal && (
				<LoginModal
					setLogIn={setLogIn}
					onLogin={handleLogin}
					onCloseModal={setShowLoginModal}
				/>
			)}
			<Routes>
				<Route path="/" element={<LearningContext />} />
				<Route element={<ProtectedRoute user={user} />}>
					<Route path="/:id" element={<UserPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/cocktails" element={<LiveSearch />} />
				</Route>
				<Route path="*" element={<div>not GELA</div>} />
			</Routes>
		</BrowserRouter>
	);
};
