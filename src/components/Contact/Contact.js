import React from "react";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className=" p-5">
      <h2 className="fw-bold mb-5">Login To Your Account </h2>

      <Form className="">
        <Form.Group
          className="mb-3 w-50 form-container"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address*</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group
          className="mb-3 w-50 form-container"
          controlId="formBasicPassword"
        >
          <Form.Label>Password*</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="btn-style" variant="primary" type="submit">
          Login
        </Button>

        <p className="mt-5">Don't Have an account?</p>
        <Button
          className="btn-style btn-success fs-5"
          variant="primary"
          type="submit"
        >
          Create Account Now
        </Button>
      </Form>

      <div className="container subcription-style mt-5">
        <div className="sub-des">
          <h2 className=" fs-1 sub-header">Subscribe to our newsletter</h2>
          <p>Get updated with the latest news and trends around the world</p>
        </div>
        <div>
          <input type="text" />
          <button className="sub-btn btn btn-primary btn-lg">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
