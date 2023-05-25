import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Swiper.css";
import img1 from "../../assets/slide_photo/1st.jpg";
import img2 from "../../assets/slide_photo/2nd.jpg";
import img3 from "../../assets/slide_photo/3rd.jpg";
import img4 from "../../assets/slide_photo/4th.jpg";
import img5 from "../../assets/slide_photo/5th.jpg";

const Slide = () => {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    "https://i.pinimg.com/564x/60/88/ec/6088ec1a0b9af7edfd275e9984c214cb.jpg",
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  const nextSlide = () => {
    setCounter((prevCounter) => (prevCounter + 1) % images.length);
  };

  const prevSlide = () => {
    setCounter(
      (prevCounter) => (prevCounter - 1 + images.length) % images.length
    );
  };

  const togglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(nextSlide, 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <div className="slide">
      <h2>Our tourist's photo</h2>
      <p>This is a stylish and interactive slide created using React.</p>
      <Link to="/category/tour-to-europe">
        <div className="bg-frame">
          <div className="image-container">
            <img src={images[counter]} alt="Slide Image" />
          </div>
        </div>
      </Link>
      <div className="counter">
        <span>
          {counter + 1}/{images.length}
        </span>
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={togglePause}>{isPaused ? "Play" : "Pause"}</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slide;
