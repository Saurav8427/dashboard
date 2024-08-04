import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="/">
        {/* <img src="logo.jpg" width="30" height="30" alt="logo"/> */}
        <i class="fa-solid fa-clover"></i>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <form className="form-inline my-4 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ color: "white !important" }}
          />
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-envelope rounded-circle"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-cog rounded-circle"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-bell rounded-circle"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img
                src="/users/12.jpg"
                class="rounded-circle"
                alt="Circular"
                width="35"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
