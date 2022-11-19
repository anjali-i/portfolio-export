import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//  import "./project.css";

//Projects
const projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <div className=" d-flex justify-content-center">
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>BMI Calculator</Card.Title>
            <Card.Text>
              Body Mass Index is a simple calculation using a person's height
              and weight. The formula is BMI = kg/m2 . A BMI of 25.0 or more is
              overweight, while the healthy range is 18.5 to 24.9.
            </Card.Text>
            <Button
              variant="primary"
              href="https://codepen.io/anjali2025/pen/MWXajVm"
            >
              Code
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <div className=" d-flex justify-content-center">
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Text>
              This weather app is one of best free weather apps that provides
              accurate weather information based on location. The essential
              weather app features include adding multiple locations.
            </Card.Text>
            <Button
              variant="primary"
              href="https://codepen.io/anjali2025/pen/ExRyobP"
            >
              Code
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default projects;
