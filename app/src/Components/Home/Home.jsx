import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Type } from "./Type";
import homeLogo from "../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import "./Home.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";

export const Home = () => {
  return (
    <>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 10 }} className="heading">
                  Hello !! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I am
                  <strong className="main-name"> &nbsp;Prajakta Hadole</strong>
                </h1>
                <div style={{ padding: 15, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }} className="homeLogo">
              <Tilt>
              <img src={homeLogo} className="img-fluid myImage" alt="laptop" />
              
            </Tilt>
              </Col>
            </Row>
            <Row>
      <div className="about__contact center">
          <a
            href="https://github.com/prajaktahadole"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto: prajaktahadole@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+91 9130805761"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/prajakta-hadole/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1m24RdgCJ9Anc7z4WpUai6ngptFUcyNfC/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
         
          <a
            href="https://goo.gl/maps/Cz1b24pQWbgenHVQ6"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </Row>
          </Container>
        </Container>
    </>
  );
};
