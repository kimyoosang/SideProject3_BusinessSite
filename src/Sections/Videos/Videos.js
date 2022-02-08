import React from "react";
import Video from "../../images/about-us-video.mp4";
import "./Videos.css";

function Videos() {
  return (
    <section className="section-2">
      <h1 className="section-heading">About Us</h1>
      <div className="section-heading-line"></div>
      <div className="video-wrapper">
        <video src={Video} className="video"></video>
        <div className="controls">
          <div className="video-bar-wrapper">
            <div className="video-bar"></div>
          </div>
          <div className="buttons">
            <button>
              <i className="far fa-play-circle"></i>
            </button>
          </div>
        </div>
      </div>
      <p className="section-2-paragraph">
        <i className="fas fa-quote-left"></i>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod
        vero magnam, voluptatem aliquid quisquam consectetur possimus cupiditate
        maiores et quis nihil? Tempora perferendis neque a incidunt porro quis
        enim?
        <i class="fas fa-quote-right"></i>
      </p>
    </section>
  );
}

export default Videos;
