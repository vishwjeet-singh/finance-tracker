import React, { useState } from "react";
import "./Homepage.scss";
import Navbar from "../../components/navbar/Navbar";
import MiddleBg from "../../components/middleBg/MiddleBg";
import RightBg from "../../components/rightBg/RightBg";
export default function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <MiddleBg />
      <RightBg />
      <div className="RBG"></div>
    </div>
  );
}
