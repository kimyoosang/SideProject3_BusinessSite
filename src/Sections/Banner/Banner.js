import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <>
      <title>Business Agency</title>
      <section className="section-1">
        <div className="banner">
          <h1 className="banner-heading">
            <span className="heading-1">Business Ideas</span>
            <span className="heading-2">Consulting</span>
            <span className="heading-3">Digital Margeting</span>
            <span className="heading-4">Strategy</span>
          </h1>
          <p className="banner-paragraph">Lorem ipsum, dolor sit </p>
          <button className="banner-btn">Discover Now</button>
        </div>
      </section>
    </>
  );
}

export default Banner;
