import React from "react";
import "./TransactionCard.scss";
import { Paper } from "@mui/material";
export default function TransactionCard(transaction) {
  return (
    <div className="container">
      <Paper elevation={3} className="transaction-paper">
        <div className="icon-name-date">
          <div className="icon"></div>
          <div className="name-date">
            <div className="name">Shopping</div>
            <div className="date">29th May 2023</div>
          </div>
        </div>
        <div className="amount">3000</div>
      </Paper>
    </div>
  );
}
