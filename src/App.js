import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Container } from "react-bootstrap";
import Skills from "./views/skills/Skills";
import Qualification from "./views/qualification/qualification";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar />
      <CustomCarousel />
      <TitleMessage />
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImageAlt="" strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade left duration={2000}>
                <hr />
                <br />
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <div>
          <Container className="container-box rounded">
            <Fade right duration={2000}>
              <hr />
              <br />
              <Qualification />
            </Fade>
          </Container>
        </div>
        <div>
          <Container className="container-box rounded">
            <Fade right duration={2000}>
              <hr />
              <Skills />
            </Fade>
          </Container>
        </div>

        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={2000}>
              <hr />
              <Projects />
            </Slide>
          </Container>
        </div>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade bottom duration={2000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
