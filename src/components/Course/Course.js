import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, price, image } = props.course;
  return (
    <div className="course-style">
      <img className="img-container" src={image} alt="" />
      <h2>{name}</h2>
      <h4>Course Fee: ${price}</h4>
    </div>
  );
};

export default Course;
