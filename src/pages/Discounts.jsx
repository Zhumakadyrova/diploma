import "./Home.css";
import "./Discounts.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Discounts() {
  return (
    <div className="Discounts">
      <div className="Main">
        <h1>Special days</h1>
        <p>Tours from 5 USD</p>
        <p>Don' miss your chance. To be a part of our adventures</p>
      </div>
      <div className="row Discount_name_2">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg"
                alt="Avatar"
              />
            </div>
            <div className=" flip-card-back">
              <p>Venice with our ice</p>
              <span>50$</span> <br />
              <Link to="/product/venice">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/d4/27/2c/d4272ce01c35d97d06f46777d2ddf955.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor </p>
              <span>50$</span> <br />
              <Link to="/product/venice">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <a href="./product">
                <img
                  src="https://i.pinimg.com/564x/5f/84/4a/5f844aee8c5ea610098eff26bc23f174.jpg"
                  alt="Avatar"
                />
              </a>
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor </p>
              <span>50$</span> <br />
              <Link to="/product/spain">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/84/0d/56/840d561182c6a9647c82dd03fcd08506.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor </p>
              <span>50$</span> <br />
              <Link to="/product/portugal-day">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Discount_name_2 ">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/eb/6c/ba/eb6cbae73c2f3e5b44525cde7ab33854.jpg"
                alt="Avatar"
              />
            </div>
            <div className=" flip-card-back">
              <p>Lorem ipsum dolor.</p>
              <span>50$</span> <br />
              <Link to="/product/istanbul-day">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/8b/61/67/8b61670a8b4bf88a11b741bb7ca0c4c6.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor </p>
              <span>50$</span> <br />
              <Link to="/product/italy-trip">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/f0/3b/ee/f03bee85e7e5fdb6a0d84819c5643337.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor.</p>
              <span>50$</span> <br />
              <Link to="/product/france">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.pinimg.com/564x/37/34/fc/3734fcbdf6cdf67549bcc6905f670b91.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <p>Lorem ipsum dolor.</p>
              <span>50$</span> <br />
              <Link to="/product/london-trip">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Main_discount">
        <div className="col-6">
          <div className="col-6_content">
            <h3>Discount of the month</h3>
            <h5>Do you want to go to the round trip?</h5>
            <Link to="/contacts">Contact us</Link>
          </div>
        </div>

        <Link to="/product/rukh-ordo">
          <div className="col-6">
            <img
              src="https://i.pinimg.com/564x/91/cf/42/91cf4253d596ee9b523086536f468c07.jpg"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
