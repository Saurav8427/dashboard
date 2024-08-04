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
  { name: 5, uv: 4000 },
  { name: 9, uv: 3000 },
  { name: 11, uv: 8000 },
  { name: 13, uv: 4000 },
  { name: 15, uv: 5000 },
  { name: 17, uv: 4000 },
  { name: 19, uv: 6000 },
  { name: 21, uv: 15500 },
  { name: 23, uv: 8000 },
  { name: 25, uv: 7000 },
  { name: 27, uv: 6000 },
  { name: 29, uv: 13000 },
  { name: 33, uv: 8000 },
  { name: 35, uv: 7000 },
  { name: 37, uv: 8000 },
  { name: 39, uv: 3000 },
  { name: 41, uv: 4000 },
  { name: 43, uv: 7000 },
  { name: 47, uv: 6000 },
  { name: 49, uv: 3000 },
  { name: 53, uv: 11000 },
  { name: 55, uv: 4000 },
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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="uv"
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
