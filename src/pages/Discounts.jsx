import "./Home.css";
import React from "react";
export default function Discounts() {
  return (
    <div className="Discounts">
      <div className="Main">
        <h1>Special days</h1>
        <p>Tours from 5 USD</p>
        <p>Don' miss your chance. To be a part of our adventures</p>
      </div>
      <div className="Discount_name">
        <div className="Dscount_card">
          <div className="card-image"> <img src="https://i.pinimg.com/564x/84/0d/56/840d561182c6a9647c82dd03fcd08506.jpg" alt="" /></div>
          <div className="card-text"></div>
        </div>
      </div>
      <div className="Discount_name">
        <div className="Dscount_card">
          <div className="card-image"> <img src="https://i.pinimg.com/564x/39/5b/26/395b26a876388aa94d0f9b7cddc70833.jpg" alt="" /></div>
          <div className="card-text"></div>
        </div>
      </div>
    </div>
  );
}
