import React from "react";
import "./Course.css";

const Course = (props) => {
  // elements that will be shown in the cards
  const { name, price, image, level, duration } = props.course;
  return (
    <div className="course-style">
      <img className="img-container" src={image} alt="" />
      <h2 className="fs-1">{name}</h2>
      <h4>Level: {level} </h4>
      <h4>Course Fee: ${price}</h4>
      <h4>Course Duration: {duration} month</h4>
    </div>
  );
};

export default Course;
