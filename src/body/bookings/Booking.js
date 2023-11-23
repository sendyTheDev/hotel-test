import React from "react";
import room from "../../assets/room.jpeg";

const Booking = () => {
  return (
    <div className="booking-card">
      <div>
        <img className="booking-img" src={room} alt="booking" />
      </div>
      <div className="booking-detials">
        <p>
          Room No. <span>102</span>
        </p>
        <p>
          Room type: <span>2 bed</span>
        </p>
        <p>
          Availability: <span>Yes</span>
        </p>
        <p>
          From: <span>01/02/23</span> to: <span>01/04/23</span>
        </p>

        <button className="delete">Cancel booking</button>
      </div>
    </div>
  );
};

export default Booking;
