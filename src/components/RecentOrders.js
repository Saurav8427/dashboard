import React from "react";

const RecentOrders = () => {
  return (
    <div className="col-md-8">
      <div className="card mb-4">
        <div className="card-body">
          <h5>Recent Orders</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Customer</th>
                <th className="small-cell">Order No.</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/users/2.jpg"
                    class="rounded-circle"
                    alt="Circular"
                    width="25"
                  />
                  Wade Warren
                </td>
                <td className="small-cell">15478256</td>
                <td>$124.00</td>
                <td>
                  <span className="badge bg-success">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/users/1.jpg"
                    class="rounded-circle"
                    alt="Circular"
                    width="25"
                  />
                  Jane Cooper
                </td>
                <td className="small-cell">48965786</td>
                <td>$385.02</td>
                <td>
                  <span className="badge bg-success">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/users/7.jpg"
                    class="rounded-circle"
                    alt="Circular"
                    width="25"
                  />
                  Guy Hawkins
                </td>
                <td className="small-cell">78958215</td>
                <td>$45.88</td>
                <td>
                  <span className="badge bg-danger">Cancelled</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/users/3.jpg"
                    class="rounded-circle"
                    alt="Circular"
                    width="25"
                  />
                  Kristin Watson
                </td>
                <td className="small-cell">20965732</td>
                <td>$65.00</td>
                <td>
                  <span className="badge bg-danger">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/users/4.jpg"
                    class="rounded-circle"
                    alt="Circular"
                    width="25"
                  />
                  Cody Fisher
                </td>
                <td className="small-cell">95715620</td>
                <td>$545.00</td>
                <td>
                  <span className="badge bg-success">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/users/5.jpg"
                    class="rounded-circle"
                    alt="Circular"
                    width="25"
                  />
                  Savannah Nguyen
                </td>
                <td className="small-cell">78514568</td>
                <td>$128.20</td>
                <td>
                  <span className="badge bg-success">Delivered</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default RecentOrders;
