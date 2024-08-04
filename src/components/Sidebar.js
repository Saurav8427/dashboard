import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          {/* <a className="nav-link" href="/"><i className="fas fa-home"></i></a> */}
          <a className="nav-link" href="/">
            {/* <img src="logo.jpg" class="rounded-circle" alt="Circular" width="35"/> */}
            <i class="fa-solid fa-clover"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-chart-line"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i class="fa-solid fa-wallet"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i class="fa-solid fa-bag-shopping"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
