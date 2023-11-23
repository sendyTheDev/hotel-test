import React from "react";
import "./Bookings.css";
import Booking from "./Booking";

const Bookings = () => {
  return (
    <section className="bookings">
      <h2 className="title">Bookings</h2>
      <p className="catch">Below are the bookings you have made.</p>
      <div className="listing">
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <Booking />
      </div>
    </section>
  );
};

export default Bookings;
