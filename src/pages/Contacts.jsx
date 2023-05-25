import React, { useState, useEffect } from "react";
import Slide from "../components/Swiper/Swiper";
import "./Contacts.css";

const Dropdown = ({ children, index, activeDropdown, setActiveDropdown }) => {
  const toggleDropdown = () => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <button className="dropdown-button" onClick={toggleDropdown}></button>
      {activeDropdown === index && (
        <ul
          className={`dropdown-content back ${
            activeDropdown === index ? "active" : ""
          }`}
        >
          {children}
        </ul>
      )}
    </>
  );
};

export default function Contacts() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isOutsideClick =
        !event.target.closest(".dropdown-button") &&
        !event.target.closest(".dropdown-content");

      if (isOutsideClick) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="Contacts">
      <div className="Main">
        <h1>Get in touch!</h1>
        <p>How can we help to spend your time?</p>
        <p>We only use natural ingredients to make our yummy ice-creams</p>
      </div>
      <div className="Main_details">
        <li className="first-link">
          <Dropdown
            index={0}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <li className="back first-link1 dropdown-content">
              <div className="Cart-section">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b6995b01d3ddfe5795e602e4fd8ca769031e0dd6e49490a9d98835de199d5ec&amp;source=constructor"
                  width="328"
                  height="353"
                  frameBorder="0"
                  title="map"
                ></iframe>
              </div>
            </li>
          </Dropdown>
        </li>
        <li className="second-link">
          <Dropdown
            index={1}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <li className="back second-link1 dropdown-content">
              <p>
                <ul>
                  <li>
                    <strong>Phone number:</strong> <br />
                    <a href="tel:">+996550197557</a>
                  </li>
                  <li>
                    <strong>Gmail:</strong> <br />
                    <a href="mailto:zhumakadyrova7@gmail.com">
                      zhumakadyrova7@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>FQ:</strong> 09467876464
                  </li>
                </ul>
              </p>
            </li>
          </Dropdown>
        </li>
        <li className="third-link link last_p">
          <Dropdown
            index={2}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <li className="back third-link1 dropdown-content last_p">
              <p>
                <ul>
                  <li>
                    <strong>
                      <a href="#">Instagram</a>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <a href="#">Facebook</a>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <a href="#">Twitter</a>
                    </strong>
                  </li>
                </ul>
              </p>
            </li>
          </Dropdown>
        </li>
        <li className="fourth-link">
          <Dropdown
            index={3}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          >
            <li className="back fourth-link1 dropdown-content">
              <p className="last_p">
                <strong>We are on YouTube</strong>
              </p>
            </li>
          </Dropdown>
        </li>
      </div>
      <Slide />
    </div>
  );
}
