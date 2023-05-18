import "./Home.css";
import React from "react";
import Slide from "../components/Swiper/Swiper";

export default function Home() {
  return (
    <div className="Home">
      <div className="Main">
        <h1>Welcome to Try Travel</h1>
        <h4>Your adventure starts here</h4>
        <p>We only use natural ingredients to make our yummy ice-creams</p>
      </div>
      <div className="Cntct">
        <div className="Cnct_link">
          <a href="./Contacts.jsx">
            <span className="Cnct_text">Contact us</span>
          </a>
        </div>
      </div>
      <div className="Home_info">
        <div className="Home_content">
          <h2>Explore the world with us.</h2>
        </div>
        <div className="Home_content__text">
          <h2>Our rules</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            vero saepe obcaecati quis non delectus qui animi mollitia sapiente
            vitae perspiciatis quam natus, consequatur enim dolores aperiam
            fugit repellendus rem?
          </p>
        </div>
        
      </div>
      <Slide />
    </div>
  );
}
