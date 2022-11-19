import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-4">
              <a
                href="mailto:am9700879@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  size="lg"
                  title="am9700879@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>

            <div className="m-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-primary"
                  size="lg"
                  title="My other projects"
                >
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-4">
              <a
                href="https://codesandbox.io/dashboard/recent?workspace=c4fcbbdc-c6d1-447b-b279-20917ba41880"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  id="medium-btn"
                  variant="outline-info"
                  size="lg"
                  title="Projects"
                >
                  <i className="fab fa-youtube"></i> CodeSandbox
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
