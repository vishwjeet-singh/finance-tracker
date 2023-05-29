import React from "react";
import "./Homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import MiddleBg from "../../components/middleBg/MiddleBg";
export default function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <MiddleBg />
      <div className="RBG"></div>
    </div>
  );
}
