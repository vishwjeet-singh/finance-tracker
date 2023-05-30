import React from "react";
import "./Profile.scss";
import { Paper } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { RiSettings2Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { UserAuth } from "../../context/AuthContext";
import { Button } from "@material-ui/core";
export default function Profile() {
  const { googleSignIn, logOut, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      if (user) {
        await logOut();
      } else {
        await googleSignIn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper className="profile-container" elevation={1}>
      <Button
        onClick={handleGoogleSignIn}
        variant="contained"
        color="primary"
        className="material-button"
      >
        {user ? "Logout" : "Sign in with Google"}
      </Button>
      <div className="dp"></div>
      <div className="welcome">Welcome {user?.displayName}!</div>
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
