import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>
      <p className="copyright">
        Copyrignt &copy; CodeAndCreate All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
