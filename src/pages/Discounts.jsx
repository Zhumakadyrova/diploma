import "./Home.css";
import "./Discounts.css";
import React from "react";
import Slide from "../components/Swiper/Swiper";
export default function Discounts() {
  return (
    <div className="Discounts">
      <div className="Main">
        <h1>Special days</h1>
        <p>Tours from 5 USD</p>
        <p>Don' miss your chance. To be a part of our adventures</p>
      </div>
      <Slide/>
      <div className="Discount_name">
        <div className="Dscount_card">
          <div className="card-image">
            <img
              src="https://i.pinimg.com/564x/84/0d/56/840d561182c6a9647c82dd03fcd08506.jpg"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet. <br />
            <span>50$</span> <br />
            <a href="#"> Learn more</a>
          </div>
        </div>
        <div className="Discount_card">
          <div className="card-image">
            {" "}
            <img
              src="https://i.pinimg.com/564x/5f/84/4a/5f844aee8c5ea610098eff26bc23f174.jpg"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet. <br />
            <span>50$</span> <br />
            <a href="#"> Learn more</a>
          </div>
        </div>
        <div className="Discount_card">
          <div className="card-image">
            {" "}
            <img
              src="https://i.pinimg.com/564x/d4/27/2c/d4272ce01c35d97d06f46777d2ddf955.jpg"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet. <br />
            <span>50$</span> <br />
            <a href="#"> Learn more</a>
          </div>
        </div>
        <div className="Discount_card">
          <div className="card-image">
            {" "}
            <img
              src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet. <br />
            <span>50$</span> <br />
            <a href="#"> Learn more</a>
          </div>
        </div>
        <div className="Discount_card">
          <div className="card-image">
            {" "}
            <img
              src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
              alt=""
            />
          </div>
          <div className="card-text"></div>
        </div>
      </div>
      <div className="Discount_name_2">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>50$</span> <br />
              <a href="#"> Learn more</a>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>50$</span> <br />
              <a href="#"> Learn more</a>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>50$</span> <br />
              <a href="#"> Learn more</a>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>50$</span> <br />
              <a href="#"> Learn more</a>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>50$</span> <br />
              <a href="#"> Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="Main_discount">
        <div className="col-6">
          <div className="col-6_content">
            <h3>Discount of the month</h3>
            <h5>Do you want to go to the round trip?</h5>
            <a href="#">Contact us</a>
          </div>
        </div>
        <div className="col-6">
          <img
            src="https://i.pinimg.com/564x/91/cf/42/91cf4253d596ee9b523086536f468c07.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
