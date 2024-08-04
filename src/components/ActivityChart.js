import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { Name: 5,  Sales: 4000 },
  { Name: 9,  Sales: 3000 },
  { Name: 11, Sales: 8000 },
  { Name: 13, Sales: 4000 },
  { Name: 15, Sales: 5000 },
  { Name: 17, Sales: 4000 },
  { Name: 19, Sales: 6000 },
  { Name: 21, Sales: 15500 },
  { Name: 23, Sales: 8000 },
  { Name: 25, Sales: 7000 },
  { Name: 27, Sales: 6000 },
  { Name: 29, Sales: 13000 },
  { Name: 33, Sales: 8000 },
  { Name: 35, Sales: 7000 },
  { Name: 37, Sales: 8000 },
  { Name: 39, Sales: 3000 },
  { Name: 41, Sales: 4000 },
  { Name: 43, Sales: 7000 },
  { Name: 47, Sales: 6000 },
  { Name: 49, Sales: 3000 },
  { Name: 53, Sales: 11000 },
  { Name: 55, Sales: 4000 },
];
const ActivityChart = () => {
  const [timeframe, setTimeframe] = useState("Weekly");
  return (
    <div className="col-md-8">
      <div className="card mb-4">
        <div className="card-body">
          <div className="chart-header">
            <h5>Activity</h5>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="timeframe-select"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={168}>
            <BarChart data={data}>
              <CartesianGrid horizontal={true} vertical={false} opacity={0.5} />
              <XAxis dataKey="Name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="Sales"
                barSize={20}
                fill="#6b99fa"
                radius={[20, 20, 20, 20]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default ActivityChart;
