import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./LineGraph.scss";
export default function LineGraph({
  heading,
  value,
  weeklyData,
  monthlyData,
  yearlyData,
}) {
  //STATES
  const [timeStamp, setTimeStamp] = useState("weekly");
  const [data, setData] = useState(weeklyData ? weeklyData : defaultData);
  const [err, setErr] = useState("");
  //FUNCTIONS
  const handleChange = (event) => {
    setTimeStamp(event.target.value);
    switch (event.target.value) {
      case "weekly":
        if (weeklyData) {
          setData(weeklyData);
          setErr("");
        } else {
          setErr("no data");
        }
        break;
      case "monthly":
        if (monthlyData) {
          setData(monthlyData);
          setErr("");
        } else {
          setErr("no data");
        }
        break;
      case "yearly":
        if (yearlyData) {
          setData(yearlyData);
          setErr("");
        } else {
          setErr("no data");
        }
        break;
      default:
        setData(defaultData);
        setErr("defaultData");
    }
  };
  //EFFECTS
  //RENDER
  return (
    <div className="line-graph">
      <Paper
        className="design-paper"
        variant="outlined"
        sx={{ width: "300px" }}
      >
        <div className="heading-container">
          <div>
            <div className="heading">{heading}</div>
            <div className="value">{value}</div>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={timeStamp}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"weekly"}>Weekly</MenuItem>
                <MenuItem value={"monthly"}>Monthly</MenuItem>
                <MenuItem value={"yearly"}>Yearly</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {err === "defaultData" ? null : (
          <div>This is just dummy data to show graph</div>
        )}
        {err.length === 0 ? (
          <Chart
            datasetIdKey="id"
            type="line"
            data={data}
            options={tempoptions}
          />
        ) : (
          <div className="err">{err}</div>
        )}
      </Paper>
    </div>
  );
}

//STATIC DATA
const tempoptions = {
  responsive: true,
  scales: {
    x: {
      display: false,
      grid: { display: false },
    },
    y: {
      display: false,
      grid: { display: false },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
const defaultData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      id: 1,

      data: [0, 49, 10, 18, 46, 47, 10],
      lineTension: 0.5,
      borderColor: "#12AD2B",
    },
  ],
};
