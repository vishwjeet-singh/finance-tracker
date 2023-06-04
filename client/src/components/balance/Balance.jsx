import React from "react";
import "./Balance.scss"
import { Paper } from "@mui/material";

export default function Balance() {
  return (
    <div className="bal-container">
      <Paper elevation={1} sx={{backgroundColor:"#FE779A"}} className="bal-paper">
        <div className="balance">
          <div className="title">BAL:</div>
          <div className="value"> $72000</div>
        </div>
      </Paper>
    </div>
  );
}
