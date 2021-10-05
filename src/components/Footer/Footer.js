import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // footer design
    <div className="Footer-container">
      <h2 className="fw-bold mb-4">
        Start Your Journey With Programming-School
      </h2>
      <h5>This is All You need To Start Your Programming Career</h5>
      <p>Best Programming Courses at a Cost-Effective Price</p>
      <button className="btn btn-success mt-3 footer-btn">
        Purchase Now at $200
      </button>
      <p className="mt-5">©2021 Tanvir All rights reserved </p>
    </div>
  );
};

export default Footer;
