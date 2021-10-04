import React from "react";
import "./NotFound.css";

const NotFound = () => {
  // in case of page failure or wrong address
  return (
    <div className="notFound-container">
      <h1 className="fw-bold">404</h1>
      <h3>Oops! We are lost.</h3>
      <p>The page you are looking for is not found</p>
    </div>
  );
};

export default NotFound;
