import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header.js";
import Home from "./body/home/Home";
import Bookings from "./body/bookings/Bookings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./body/login/Login";
import Register from "./body/login/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
