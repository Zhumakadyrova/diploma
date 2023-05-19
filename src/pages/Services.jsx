import "./Services.css";
import React from "react";
import Slide from "../components/Swiper/Swiper";
export default function Services() {
  return (
    <div className="Services">
      <div className="Main">
        <h1>From your flights to your drems</h1>
        <p>This is my awesome Ice-Cream shop.</p>
        <p>We only use natural ingredients to make our yummy ice-creams</p>
      </div>
      <div className="question_list">
        <div className="question_row">
          <div className="col-4">
            <h5>snflnf</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-8">
            <a href="#">About</a>
          </div>
        </div>
        <div className="question_row">
          <div className="col-4">
            <h5>snflnf</h5>
            <p>Lorem ipsum dolor </p>
          </div>
          <div className="col-8">
            <a href="#">About</a>
          </div>
        </div>
        <div className="question_row">
          <div className="col-4">
            <h5>snflnf</h5>
            <p>Lorem ipsum dolor </p>
          </div>
          <div className="col-8">
           <a href="#">About</a>
          </div>
        </div>
        <div className="question_row">
          <div className="col-4">
            <h5>snflnf</h5>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="col-8">
            <a href="#">About</a>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <a href="#">
            <img
              src="https://i.pinimg.com/564x/68/8e/45/688e4524c03c532cf821a8ca0935a6fe.jpg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://i.pinimg.com/564x/44/db/1a/44db1a7224d40d24bbb32fea56f9f91a.jpg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://i.pinimg.com/564x/42/61/58/4261587d247054809e5c8d62fa143c3a.jpg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://i.pinimg.com/564x/6f/af/c5/6fafc54dffe3fb0554d4ddeca1c762ef.jpg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://i.pinimg.com/564x/71/66/22/7166224b95d9b7f229367e9fe1a8ce08.jpg"
              alt=""
            />
          </a>
        </li>
      </ul>
      <Slide />
    </div>
    
  );
}
