import { useEffect, useState } from "react";
import LearningContext from "./components/context/LearningContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { ReduxTodo } from "./pages/ReduxTodo";
import ProtectedRoute from "./components/PrivateRoute";
import { LoginModal } from "./components/LoginModal";

import LiveSearch from "./components/Livesearch/LiveSearch";

import { ReduxPlay } from "./pages/ReduxPlay";
import { setUser } from "./features/user/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { NotFound } from "./pages/NotFound";
import { CocktailsWithCart } from "./pages/CocktailsWithCart";
import { Cart } from "./components/Cart/Cart";

const staticPassword = "123";

export const App = () => {
  const [logIn, setLogIn] = useState({ name: "", password: "" });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isCartShown = useSelector((state) => state.cart.showCartItems);

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

      {isCartShown && <Cart />}

      <Routes>
        <Route path="/" element={<ReduxTodo />} />
        <Route path="/redux" element={<ReduxPlay />} />
        <Route path="/context" element={<LearningContext />} />
        <Route path="/cocktails-cart" element={<CocktailsWithCart />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/:id" element={<UserPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktails" element={<LiveSearch />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
