import "./Home.css";
import React from "react";
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
          <a href="./Contacts.jsx" className="Cnct_link">Contact us </a>
        </div>
      </div>
    </div>
  );
}
