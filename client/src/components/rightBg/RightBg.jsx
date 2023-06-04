import React from "react";
import "./RightBg.scss";
import Profile from "../profile/Profile";
import LineGraph from "../lineGraph/LineGraph";
import NewTransaction from "../newTransaction/NewTransaction";
import { weeklyData, monthlyData, yearlyData } from "../lineGraph/dummyData";
import { UserAuth } from "../../context/AuthContext";

export default function RightBg() {
  const { expense } = UserAuth();
  return (
    <div className="right-bg">
      <Profile />
      <LineGraph
        heading={"Expenses"}
        value={`\$${expense}`}
        weeklyData={weeklyData}
        monthlyData={monthlyData}
        yearlyData={yearlyData}
      />
      {/* <LineGraph /> */}
      <NewTransaction />
    </div>
  );
}
