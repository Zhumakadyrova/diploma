import React, { useState } from "react";
import Slide from "../components/Swiper/Swiper";
import "./Contacts.css";

const Dropdown = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <button className="dropdown-button" onClick={toggleDropdown}></button>
      {isDropdownOpen && <ul className="dropdown-content">{children}</ul>}
    </>
  );
};

export default function Contacts() {
  return (
    <div className="Contacts">
      <div className="Main">
        <h1>Get in touch!</h1>
        <p>How can we help to spend your time?</p>
        <p>We only use natural ingredients to make our yummy ice-creams</p>
      </div>
      <div className="Main_details">
        <li className="first-link">
          <Dropdown>
            <li className="back first-link1 dropdown-content">
              <div className="Cart-section">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b6995b01d3ddfe5795e602e4fd8ca769031e0dd6e49490a9d98835de199d5ec&amp;source=constructor"
                  width="328"
                  height="353"
                  frameborder="0"
                ></iframe>
              </div>
            </li >
          </Dropdown>
        </li>
        <li className="second-link">
          <Dropdown >
            <li className="back second-link1 dropdown-content">
              <p><ul>
                <li>
                  <strong>Phone number:</strong>+996550197557
                </li>
                <li>
                  <strong>Gmail:</strong> zhumakadyrova7@gmail.com
                </li>
                <li>
                  <strong>FQ:</strong> 09467876464
                </li>
              </ul>
              </p>
              
            </li>
          </Dropdown>
        </li>
        <li className=" back third-link">
          <Dropdown>
            <li className="third-link1 dropdown-content">
              <p><ul>
                <li>
                  <strong><a href="#">Instagram</a></strong>
                </li>
                <li>
                  <strong><a href="#">Instagram</a></strong>
                </li>
                <li>
                  <strong><a href="#">TikTok</a></strong>
                </li>
              </ul></p>
              
              </li>
          </Dropdown>
        </li>
        <li className=" back fourth-link">
          <Dropdown>
            <li className="fourth-link1 dropdown-content">
              <p><a href="https://youtu.be/uYFtWVv5F3E" target="_blank">We are in Youtube</a></p></li>
          </Dropdown>
        </li>
      </div>
      <Slide />
    </div>
  );
}