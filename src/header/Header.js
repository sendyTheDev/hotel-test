import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let [activeMenu, setActiveMenu] = useState(1);

  const setActive = activeMenu == 1 ? "home-active" : "";
  const setBooking = activeMenu == 2 ? "booking-active" : "";
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo">Kula Hotel</div>
      <ul className="nav-list">
        <li
          onClick={() => {
            setActiveMenu(1);
            navigate("/");
          }}
          className={setActive}
        >
          Home
        </li>
        <li
          onClick={() => {
            setActiveMenu(2);
            navigate("/booking");
          }}
          className={setBooking}
        >
          Bookings
        </li>
      </ul>

      <div className="signin">
        <p
          onClick={() => {
            navigate("/register");
            setActiveMenu(0);
          }}
        >
          Register
        </p>
        <p
          onClick={() => {
            navigate("/login");
            setActiveMenu(0);
          }}
        >
          Sign In
        </p>
      </div>
    </div>
  );
};

export default Header;
