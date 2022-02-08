import React, { useRef, useState } from "react";
import Video from "../../images/about-us-video.mp4";
import "./Videos.css";

function Videos() {
  const videoPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  const play = () => {
    videoPlayer.current.play();
  };
  const pause = () => {
    videoPlayer.current.pause();
  };
  return (
    <section class="section-2" id="about-us">
      <h1 class="section-heading">About Us</h1>
      {/* <div class="section-heading-line"></div> */}
      <div class="video-wrapper">
        <video src={Video} class="video"></video>
        <div class="controls">
          <div class="video-bar-wrapper">
            <div class="video-bar"></div>
          </div>
          <div class="buttons">
            <button id="play-pause">
              <i class="far fa-play-circle"></i>
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
