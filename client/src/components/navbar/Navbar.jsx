import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
      <div className="nav-bar">
        <div className="title">
          Coin Control
        </div>
        <div className="navitems">
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Transactions</li>
            <li>Calender</li>
            <li>Events</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
  );
}
