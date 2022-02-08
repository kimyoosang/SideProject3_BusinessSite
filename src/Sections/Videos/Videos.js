import React, { useEffect, useRef, useState } from "react";
import Video from "../../images/about-us-video.mp4";
import "./Videos.css";

function Videos() {
  const videoPlayer = useRef();
  const videoBar = useRef();
  const btn = useRef();

  const play = () => {
    if (videoPlayer.current.paused) {
      videoPlayer.current.play();
      videoPlayer.current.style.opacity = ".7";
      btn.current.className = "far fa-pause-circle";
    } else {
      pause();
      videoPlayer.current.style.opacity = ".3";
      btn.current.className = "far fa-play-circle";
    }
  };
  const pause = () => {
    videoPlayer.current.pause();
  };

  const timeUpdate = () => {
    const barWidth =
      videoPlayer.current.currentTime / videoPlayer.current.duration;
    videoBar.current.style.width = `${barWidth * 100}%`;
  };

  return (
    <section class="section-2" id="about-us">
      <h1 class="section-heading">About Us</h1>
      {/* <div class="section-heading-line"></div> */}
      <div class="video-wrapper">
        <video
          src={Video}
          class="video"
          ref={videoPlayer}
          onTimeUpdate={timeUpdate}
        ></video>
        <div class="controls">
          <div class="video-bar-wrapper">
            <div class="video-bar" ref={videoBar}></div>
          </div>
          <div class="buttons">
            <button id="play-pause" onClick={play}>
              <i class="far fa-play-circle" ref={btn}></i>
            </button>
          </div>
        </div>
      </div>
      <p class="section-2-paragraph">
        <i class="fas fa-quote-left"></i>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        voluptatibus ipsum expedita perspiciatis unde repellat eligendi quisquam
        optio neque sint consequuntur, dolore delectus nisi eveniet nostrum
        explicabo. Quiarepellat, ut. Lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit amet.
        <i class="fas fa-quote-right"></i>
      </p>
    </section>
  );
}

export default Videos;
