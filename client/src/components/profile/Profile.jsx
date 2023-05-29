import React from "react";
import "./Profile.scss";
import { Paper } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { RiSettings2Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
export default function Profile() {
  return (
    <Paper className="profile-container" elevation={1}>
      <div className="dp"></div>
      <div className="welcome">Welcome Swagat!</div>
      <div className="options">
        <ul>
          <li>
            <div className="li-items">
              <div className="title">Profile</div>
              <div className="icon">
                <FiEdit />
              </div>
            </div>
          </li>
          <li>
            <div className="li-items">
              <div className="title">Settings</div>
              <div className="icon">
                <RiSettings2Line />
              </div>
            </div>
          </li>
          <li>
            <div className="li-items">
              <div className="title">Wallet</div>
              <div className="icon">
                <IoWalletOutline />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Paper>
  );
}
