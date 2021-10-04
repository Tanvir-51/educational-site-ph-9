import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    // course Tab elements
    <div>
      <h2 className="fw-bold m-5 text-success ">Course Offered</h2>
      <div className="course-container">
        {courses.map((course) => (
          <Course key={course.name} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
