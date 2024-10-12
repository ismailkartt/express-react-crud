import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home");
    } else if (location.pathname === "/add") {
      setActive("Add");
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          User Management System
        </Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${active === "Home" ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/add" className={`nav-link ${active === "Add" ? "active" : ""}`}>
            Add New User
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
