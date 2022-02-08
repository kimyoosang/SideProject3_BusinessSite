import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={toggle ? "navbar change" : "navbar"}>
        <div class="logo">
          <a href="#">
            <span>C</span>ode<span>A</span>nd<span>C</span>reate
          </a>
        </div>
        <div className={toggle ? "nav-list change" : "nav-list"}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Pricing
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
      <div className="menu" onClick={toggleHandler}>
        <div className={toggle ? "line line-1 change" : "line line-1"}></div>
        <div className="line line-2"></div>
        <div className={toggle ? "line line-3 change" : "line line-3"}></div>
      </div>
    </>
  );
}

export default Navbar;
