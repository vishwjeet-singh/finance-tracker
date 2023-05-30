import React from "react";
import "./RightBg.scss";
import Profile from "../profile/Profile";
import LineGraph from "../lineGraph/LineGraph";
import NewTransaction from "../newTransaction/NewTransaction";
import { weeklyData, monthlyData, yearlyData } from "../lineGraph/dummyData";

export default function RightBg() {
  return (
    <div className="right-bg">
      <Profile />
      <LineGraph
        heading={"Expenses"}
        value={"$145,000"}
        weeklyData={weeklyData}
        monthlyData={monthlyData}
        yearlyData={yearlyData}
      />
      {/* <LineGraph /> */}
      <NewTransaction />
    </div>
  );
}
