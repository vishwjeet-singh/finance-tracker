import React from "react";
import "./TransactionCard.scss";
import { Paper } from "@mui/material";
export default function TransactionCard({ category, amount, date }) {
  return (
    <div className="container">
      <Paper elevation={1} className="transaction-paper">
        <div className="icon-name-date">
          <div className="icon"></div>
          <div className="name-date">
            <div className="name">{category}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="amount">{amount}</div>
      </Paper>
    </div>
  );
}
