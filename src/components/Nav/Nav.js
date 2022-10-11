import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold" href="/">
            Skill Checker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-semibold">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "bg-primary nav-link text-white px-3" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/topics"
                  className={({ isActive }) =>
                    isActive ? "bg-primary nav-link text-white px-3" : "nav-link"
                  }
                >
                  Topics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="statistics"
                  className={({ isActive }) =>
                    isActive ? "bg-primary nav-link text-white px-3" : "nav-link"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "bg-primary nav-link text-white px-3" : "nav-link"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
