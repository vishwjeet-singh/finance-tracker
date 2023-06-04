import React from "react";
import "./Balance.scss";
import { Paper } from "@mui/material";
import { UserAuth } from "../../context/AuthContext";

export default function Balance() {
  const { expense } = UserAuth();
  return (
    <div className="bal-container">
      <Paper
        elevation={1}
        sx={{ backgroundColor: "#00DFA2" }}
        className="bal-paper"
      >
        <div className="balance">
          <div className="title">EXPENSE: </div>
          <div className="value"> ${expense}</div>
        </div>
      </Paper>
    </div>
  );
}
