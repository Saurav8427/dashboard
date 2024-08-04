import React from "react";
import { Label, PieChart, Pie, Cell } from "recharts";
const COLORS = ["#7096fc", "#293463"];
const dataPie = [
  { name: "Completed", value: 70 },
  { name: "Remaining", value: 30 },
];
const Metrics = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        <div className="card mb-4">
          <div className="card-body">
            <div className="mb-2">
              <i className="fas fa-shopping-cart fa-2x"></i>
            </div>
            <div>
              <h7>Total Orders</h7>
              <div className="d-flex justify-content-between align-items-center">
                <h2>75</h2>
                <small className="text-success">
                  <i className="fas fa-arrow-up"></i> 3%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card mb-4">
          <div className="card-body">
            <div className="mb-2">
              <i className="fas fa-truck fa-2x"></i>
            </div>
            <div>
              <h7>Total Delivered</h7>
              <div className="d-flex justify-content-between align-items-center">
                <h2>70</h2>
                <small className="text-danger">
                  <i className="fas fa-arrow-down"></i> 3%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card mb-4">
          <div className="card-body">
            <div className="mb-2">
              <i className="fas fa-times-circle fa-2x"></i>
            </div>
            <div>
              <h7>Total Cancelled</h7>
              <div className="d-flex justify-content-between align-items-center">
                <h2>05</h2>
                <small className="text-success">
                  <i className="fas fa-arrow-up"></i> 3%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card mb-4">
          <div className="card-body">
            <div className="mb-2">
              <i className="fas fa-hand-holding-dollar fa-2x"></i>
            </div>
            <div>
              <h7>Total Revenue</h7>
              <div className="d-flex justify-content-between align-items-center">
                <h2>$12k</h2>
                <small className="text-danger">
                  <i className="fas fa-arrow-down"></i> 3%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h7>Net Profit</h7>
                <h1 className="profit">$6759.25</h1>
                <small className="text-success mt-4">
                  <i className="fas fa-arrow-up"></i> 3%
                </small>
              </div>
              <div className="pie-chart">
                <PieChart width={100} height={100}>
                  <Pie
                    data={dataPie}
                    cx={45}
                    cy={45}
                    innerRadius={36}
                    outerRadius={48}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {dataPie.map((entry, index) => (
                      <Cell
                        cornerRadius={index === 1 ? 0 : 10}
                        stroke="#202028"
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Label
                      value={dataPie[0].value + "%"}
                      position="center"
                      fill="#f1f1f1"
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    />
                  </Pie>
                </PieChart>
                {/* <div className="pie-chart-label">70% Goal</div> */}
                <div className="disclaimer">* Rounded-off values</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
