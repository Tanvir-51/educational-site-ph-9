import React from "react";
import "./About.css";
import pic1 from "../images/pic1.jpg";
import { Accordion } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h1>Frequently Asked Questions</h1>

        {/* used accordion from bootstrap */}

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Are Programming-School courses free?
            </Accordion.Header>
            <Accordion.Body>
              As an individual university or college student, you have access to
              unlimited Guided Projects and one course for free per year. Also,
              you can still visit Programming-School.org and sign up to audit
              courses for free.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Is Programming-School certificate valid?
            </Accordion.Header>
            <Accordion.Body>
              Programming-School courses are accredited by the leading global
              universities and its certificates are recognized by many
              employers. Unlike many other eLearning course providers, it hands
              out verified certificates and real degrees that can useful for
              your career.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can you fail a Programming-School course?
            </Accordion.Header>
            <Accordion.Body>
              What happens if you fail Programming-School? If you do not earn
              your course certificate within 180 days, your registration will
              expire and you will need to pay to re-enroll for the course
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I use Programming-School on my resume?
            </Accordion.Header>
            <Accordion.Body>
              Unless there is a specific reason not to, you should list
              Programming-School credentials in your Education section. ... In
              that case, it can be advantageous to separately highlight your
              Programming-School credential at the top of your resume, to make
              clear your current focus to anyone reading your resume.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How many attempts are allowed in Programming-School?
            </Accordion.Header>
            <Accordion.Body>
              You can attempt each quiz up to three times every 8 hours, with an
              unlimited number of total attempts. The number of questions that
              need to be answered correctly to pass are displayed at the
              beginning of each quiz.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <img className="img-style" src={pic1} alt="" />
      </div>
    </div>
  );
};

export default About;
