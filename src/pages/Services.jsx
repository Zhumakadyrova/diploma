import "./Services.css";
import React from "react";
import Slide from "../components/Swiper/Swiper";
import { Link } from "react-router-dom";
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
          <Link to="/category/horse-riding">About</Link>
          </div>
        </div>
        <div className="question_row">
          <div className="col-4">
            <h5>snflnf</h5>
            <p>Lorem ipsum dolor </p>
          </div>
          <div className="col-8">
          <Link to="/category/ticket">About</Link>
          </div>
        </div>
        <div className="question_row">
          <div className="col-4">
            <h5>snflnf</h5>
            <p>Lorem ipsum dolor </p>
          </div>
          <div className="col-8">
          <Link to="/category/activities">About</Link>
          </div>
        </div>
        <div className="question_row">
          <div className="col-4">
            <h5>snflnf</h5>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="col-8">
            
            <Link to="/category/hiking-equipment">About</Link>
          </div>
        </div>
      </div>
      <Slide />
    </div>
    
  );
}
