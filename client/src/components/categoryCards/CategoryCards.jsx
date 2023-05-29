import React from "react";
import "./CategoryCards.scss";
import { Paper } from "@mui/material";
export default function CategoryCards(category) {
  return (
    <Paper className="category-paper" elevation={2} >
      <div className="category-container">
        <div className="category-icon"></div>
        <div className="name-amt">
          <div className="category-name">Housing Loan</div>
          <div className="category-amount">45,000</div>
        </div>
      </div>
    </Paper>
  );
}
