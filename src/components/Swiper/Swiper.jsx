import React, { useState, useEffect } from 'react';
import "./Swiper.css";
import img1 from "../../assets/slide_photo/1st.jpg";
import img2 from "../../assets/slide_photo/2nd.jpg";
import img3 from "../../assets/slide_photo/3rd.jpg";
import img4 from "../../assets/slide_photo/4th.jpg";
import img5 from "../../assets/slide_photo/5th.jpg";

const Slide = () => {
  const [counter, setCounter] = useState(0);
  const images = ["https://i.pinimg.com/564x/60/88/ec/6088ec1a0b9af7edfd275e9984c214cb.jpg", img1, img2, img3, img4, img5 ];

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
