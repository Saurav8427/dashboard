import React, { useState } from 'react';
import { Label,PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
const COLORS = ['#7096fc', '#293463'];
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
  const dataPie = [
    { name: 'Completed', value: 70 },
    { name: 'Remaining', value: 30 },
  ];

const Dashboard = () => {
    const [timeframe, setTimeframe] = useState('Weekly');
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="content flex-grow-1">
          <div className="container-fluid dashboard">
          <div className="row">
            <h4>Dashboard</h4>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="card mb-4">
                  <div className="card-body">
                      <div className='mb-2' >
                        <i className="fas fa-shopping-cart fa-2x"></i>
                      </div>
                      <div>
                        <h7>Total Orders</h7>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2>75</h2>
                            <small className="text-success"><i className="fas fa-arrow-up"></i> 3%</small>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className='mb-2'>
                        <i className="fas fa-truck fa-2x"></i>
                      </div>
                      <div>
                        <h7>Total Delivered</h7>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2>70</h2>
                            <small className="text-danger"><i className="fas fa-arrow-down"></i> 3%</small>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card mb-4">
                  <div className="card-body">
                  <div className='mb-2'>
                        <i className="fas fa-times-circle fa-2x"></i>
                      </div>
                      <div>
                        <h7>Total Cancelled</h7>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2>05</h2>
                            <small className="text-success"><i className="fas fa-arrow-up"></i> 3%</small>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card mb-4">
                  <div className="card-body">
                  <div className='mb-2'>
                        <i className="fas fa-hand-holding-dollar fa-2x"></i>
                      </div>
                      <div>
                        <h7>Total Revenue</h7>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2>$12k</h2>
                            <small className="text-danger"><i className="fas fa-arrow-down"></i> 3%</small>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                <div className="card-body">
                    
                    <div className='d-flex justify-content-between align-items-center'>
                    <div><h7>Net Profit</h7>
                    <h1 className='profit'>$6759.25</h1>
                    <small className="text-success mt-4"><i className="fas fa-arrow-up"></i> 3%</small></div>
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
                            {data.map((entry, index) => (
                                <Cell cornerRadius={index === 1 ? 0 : 10} stroke="#202028" key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <Label
                                value={dataPie[0].value + "%"}
                                position="center"
                                fill="#f1f1f1"
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    fontFamily: "Roboto"
                                }}
                                />
                            </Pie>
                        </PieChart>
                        {/* <div className="pie-chart-label">70% Goal</div> */}
            <div className='disclaimer'>* Rounded-off values</div>
            </div>
            </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
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
                        <Bar dataKey="uv" barSize={20} fill="#7096fb" radius={[20, 20, 20, 20]} />
                        </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="goal-item" >
                            <div className="goal-icon" style={{ backgroundColor: '#5f3237' }}>
                            <i class="fa-solid fa-bullseye fa-xl"></i>
                            </div>
                            <h5>Goals</h5>
                            <div className="goal-arrow">
                            <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="goal-item">
                            <div className="goal-icon"  style={{ backgroundColor: '#293368' }}>
                            <i class="fas fa-hamburger fa-xl"></i>
                            </div>
                            <h5>Popular Dishes</h5>
                            <div className="goal-arrow">
                            <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="goal-item">
                            <div className="goal-icon"  style={{ backgroundColor: '#234861' }}>
                            <i class="fa-solid fa-utensils fa-xl"></i>
                            </div>
                            <h5>Menus</h5>
                            <div className="goal-arrow">
                            <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>    
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5>Recent Orders</h5>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Customer</th>
                          <th>Order No.</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="/users/2.jpg" class="rounded-circle" alt="Circular" width="25"/>Wade Warren</td>
                          <td>15478256</td>
                          <td>$124.00</td>
                          <td><span className="badge bg-success">Delivered</span></td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/users/1.jpg" class="rounded-circle" alt="Circular" width="25"/>Jane Cooper</td>
                          <td>48965786</td>
                          <td>$385.02</td>
                          <td><span className="badge bg-success">Delivered</span></td>
                        </tr>
                        <tr>
                          <td><img src="/users/7.jpg" class="rounded-circle" alt="Circular" width="25"/>Guy Hawkins</td>
                          <td>78958215</td>
                          <td>$45.88</td>
                          <td><span className="badge bg-danger">Cancelled</span></td>
                        </tr>
                        <tr>
                          <td><img src="/users/3.jpg" class="rounded-circle" alt="Circular" width="25"/>Kristin Watson</td>
                          <td>20965732</td>
                          <td>$65.00</td>
                          <td><span className="badge bg-danger">Pending</span></td>
                        </tr>
                        <tr>
                          <td><img src="/users/4.jpg" class="rounded-circle" alt="Circular" width="25"/>Cody Fisher</td>
                          <td>95715620</td>
                          <td>$545.00</td>
                          <td><span className="badge bg-success">Delivered</span></td>
                        </tr>
                        <tr>
                          <td><img src="/users/5.jpg" class="rounded-circle" alt="Circular" width="25"/>Savannah Nguyen</td>
                          <td>78514568</td>
                          <td>$128.20</td>
                          <td><span className="badge bg-success">Delivered</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5>Customer's Feedback</h5>
                    <div className="feedback">
                      <p><strong><img src="/users/6.jpg" class="rounded-circle" alt="Circular" width="25"/>Jenny Wilson</strong></p>
                      <p><i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star"></i></p>
                      <p className="review">The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger with greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</p>
                      <hr></hr>
                    </div>
                    <div className="feedback">
                      <p><strong><img src="/users/8.jpg" class="rounded-circle" alt="Circular" width="25"/>Dianne Russell</strong></p>
                      <p><i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i></p>
                      <p className="review">We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.</p>
                        <hr></hr>
                    </div>
                    <div className="feedback">
                      <p><strong><img src="/users/9.jpg" class="rounded-circle" alt="Circular" width="25"/>Devon Lane</strong></p>
                      <p><i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star text-warning"></i> <i className="fas fa-star"></i></p>
                      <p className="review">Normally wings are wings, but theirs are lean meaty and tender, and cooked to perfection. I had a burger with greens (gluten-free) which was also very good.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
