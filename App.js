import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import SignUp from "./Components/SignUp/SignUp.js";
import Home from "./Components/Home/Home.js";
import { auth } from "./Firebase.js";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
      console.log(user);
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Home Name={userName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
