import React from "react";
import "./Room.css";
import room from "../../../assets/room.jpeg";

const Room = () => {
  return (
    <div className="room-card">
      <div>
        <img className="room-img" src={room} alt="room" />
      </div>
      <div className="room-detials">
        <p>
          Room No. <span>102</span>
        </p>
        <p>
          Room type: <span>2 bed</span>
        </p>
        <p>
          Availability: <span>Yes</span>
        </p>

        <button className="book-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Room;
