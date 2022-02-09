import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#videos">Videos</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="copyright">
        Copyrignt &copy; CodeAndCreate All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
