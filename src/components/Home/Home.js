import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2 className="fw-bold m-5 text-success ">Course Offered</h2>
      <div>
        {courses.slice(0, 6).map((course) => (
          <Course key={course.name} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Home;
