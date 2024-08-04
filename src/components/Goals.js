import React from "react";

const Goals = () => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-body">
          <div className="goal-item">
            <div className="goal-icon" style={{ backgroundColor: "#5f3237" }}>
              <i class="fa-solid fa-bullseye fa-xl"></i>
            </div>
            <h5>Goals</h5>
            <div className="goal-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="goal-item">
            <div className="goal-icon" style={{ backgroundColor: "#293368" }}>
              <i class="fas fa-hamburger fa-xl"></i>
            </div>
            <h5>Popular Dishes</h5>
            <div className="goal-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="goal-item">
            <div className="goal-icon" style={{ backgroundColor: "#234861" }}>
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
  );
};
export default Goals;
