import React, { useState } from 'react';
import "./Swiper.css";

const Slide = () => {
  const [counter, setCounter] = useState(0);
  const images = ['public/images/1st.jpg', 'public/images/2nd.jpg', 'public/images/3rd.jpg', 'public/images/5th.jpg', ];

  const incrementCounter = () => {
    setCounter(prevCounter => (prevCounter + 1) % images.length);
  };

  const decrementCounter = () => {
    setCounter(prevCounter => (prevCounter - 1 + images.length) % images.length);
  };

  return (
    <div className="slide">
      <h2>Our tourist's photo</h2>
      <p>This is a stylish and interactive slide created using React.</p>
      <div className="bg-frame">
      <div className="image-container">
        <img src={images[counter]} alt="Slide Image" />
      </div>
      </div>
      <div className="counter">
        <button onClick={decrementCounter}>-</button>
        <span>{counter + 1}/{images.length}</span>
        <button onClick={incrementCounter}>+</button>
      </div>
    </div>
  );
};


export default Slide;

