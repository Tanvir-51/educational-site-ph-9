import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Home.css";
import pic2 from "../images/pic2.webp";

const Home = () => {
  // home page design
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="home-container pt-4">
        <div className="">
          <h2 className="fs-1 fw-bold">A Hub of Quality Courses </h2>
          <h4>Instructed by the best individuals in their own fields</h4>
        </div>
        <div className="top-container">
          <div>
            <img className="img-style" src={pic2} alt="" />
          </div>
          <div>
            <h2 className="text-dark-50">
              "Programming is a skill best acquired by practise and example
              rather than from books "
            </h2>

            <i className="fs-5 ">--A Wise Programmer</i>
            <br />
            <button className="mt-4 btn btn-primary btn-large text-white">
              <a className="course-btn" href="/course">
                Get Started
              </a>
            </button>
          </div>
        </div>
      </div>

      <h2 className="fw-bold m-5 text-success ">Course Offered</h2>
      <div className="course-container">
        {courses.slice(0, 6).map((course) => (
          <Course key={course.name} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Home;
