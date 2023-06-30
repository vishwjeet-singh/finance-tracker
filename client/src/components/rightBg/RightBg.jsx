import React, { useEffect, useState } from "react";
import "./RightBg.scss";
import Profile from "../profile/Profile";
import LineGraph from "../lineGraph/LineGraph";
import NewTransaction from "../newTransaction/NewTransaction";
import { monthlyData, yearlyData } from "../lineGraph/dummyData";
import { UserAuth } from "../../context/AuthContext";

export default function RightBg() {
  const { expense, allWeeklyTransactions } = UserAuth();
  const [weeklyData, setWeeklyData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        id: 1,
        data: [12, 34, 23, 54, 23, 12, 15],
        lineTension: 0.3,
        borderColor: "#12AD2B",
      },
    ],
  });

  console.log(allWeeklyTransactions, "transactions");
  useEffect(() => {
    setWeeklyData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].splice(
        0,
        Math.min(allWeeklyTransactions.length, 7)
      ),
      datasets: [
        {
          id: 1,
          data: allWeeklyTransactions.splice(
            0,
            Math.min(allWeeklyTransactions.length, 7)
          ),
          lineTension: 0.3,
          borderColor: "#12AD2B",
        },
      ],
    });
  }, [allWeeklyTransactions]);

  // console.log(weeklyData);
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
