import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer align-items-center ">
      <div className="col col-4 text-start">
        <a href="">BrandName</a>
      </div>

      <div className="col col-4 contact">
        <h6>Contact us</h6>
        <ul>
          <li>+56923232525</li>
          <li>Grand avenue #1512</li>
        </ul>
      </div>

      <div className="col col-4 about">
        <h6>About us</h6>
        <ul>
          <li>Corporate information</li>
          <li>News</li>
          <li>Work with us</li>
        </ul>
      </div>
    </div>
  );
};
