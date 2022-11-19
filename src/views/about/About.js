import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./about.css";
// import Profile from "../../assets/img/profile/profile.svg";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2 ">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src="https://techstory.in/wp-content/uploads/2022/09/laptop_Kirill-Smyslov_getty.jpg"
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left ">
                <br />
                I’m a Front End Developer. I have a passion for writing clean
                and modular code. I am also keen of maintaining beautiful,
                interactive, minimalistic, responsive and user-friendly UI.
                <br />
                <br />
                Along with that, I love learning about new technologies, what
                problems are they solving and How can I use them to build better
                and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://docs.google.com/document/d/1L3xZgcyatAkLnnRP0k3ESMNKLm93tnsKEsuLTWaOFWU/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="success">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://codepen.io/your-work"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="secondary">
                        Codepen
                      </Button>
                    </a>
                  </div>
                  {/* <div>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
