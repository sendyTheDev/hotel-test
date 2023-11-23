import React from "react";
import "./Home.css";
import Room from "./Room/Room";
const Home = () => {
  return (
    <div className="home">
      <h2 className="title">Home</h2>
      <div className="listing">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
};

export default Home;
