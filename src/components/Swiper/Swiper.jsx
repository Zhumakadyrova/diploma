import React, { useState, useEffect } from 'react';
import "./Swiper.css";

const Slide = () => {
  const [counter, setCounter] = useState(0);
  const images = ['src/assets/slide_photo/1st.jpg', 'src/assets/slide_photo/2nd.jpg', 'src/assets/slide_photo/3rd.jpg', 'src/assets/slide_photo/4th.jpg', "src/assets/slide_photo/5th.jpg", "src/assets/slide_photo/6th.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % images.length);
    }, 2000); // Изменить слайд каждую секунду

    return () => {
      clearInterval(interval); // Очистить интервал при размонтировании компонента
    };
  }, []);

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
        <span>{counter + 1}/{images.length}</span>
      </div>
    </div>
  );
};

export default Slide;
