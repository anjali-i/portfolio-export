import React from "react";
import { Carousel } from "react-bootstrap";
import ScrollDown from "../scroll-down/ScrollDown";
import "./carousal.css";

const CustomCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src="https://media.istockphoto.com/id/1055083194/photo/close-up-programmer-man-hand-typing-on-keyboard-laptop-for-register-data-system-or-access.jpg?s=612x612&w=0&k=20&c=4r6KIvWK67XsgjlfdRksuB3La9IdzZ8MQ4BOoxnPAF8="
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src="https://images.ctfassets.net/pdf29us7flmy/2tNPd8Zw7CEbt9wBh6g3PN/e12ca508e07bc7f439c5d31d7bd9b3c8/shutterstock_407008072__1_.jpg?w=720&q=100&fm=jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src="https://www.saintlad.com/wp-content/uploads/2021/07/joshua-aragon-BMnhuwFYr7w-unsplash.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default CustomCarousel;
