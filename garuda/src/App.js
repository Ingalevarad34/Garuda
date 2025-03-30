import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import './App.css';
import Login from './components/FirebaseAuth/login.js';
import SignUp from './components/FirebaseAuth/register.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState, useEffect } from "react";
import { auth } from "./components/FirebaseAuth/firebase.js";
import CreateFormEvent from "./section/createEvent/CreateFormEvent.js";
import AboutUs from "./pages/aboutUs/aboutUs.js";
import DmLights from "./pages/Dm Lights/DmLights.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Redirect root ("/") to Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Route - Redirects to Home if user is logged in */}
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />

        {/* Register Route - Redirects to Home if user is logged in */}
        <Route path="/register" element={user ? <Navigate to="/home" /> : <SignUp />} />

        {/* Home Route - Only accessible when logged in */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />

        <Route path="/createformevent" element={<CreateFormEvent />} /> {/* Create Event Page */}

        <Route path="/about" element={<AboutUs />} /> {/* About us Page */}
        <Route path="/dmlights" element={<DmLights />} /> {/* Dm lights */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
