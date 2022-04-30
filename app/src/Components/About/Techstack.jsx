import React from "react";
import "./About.css";
import "./Techstack.css";
import { Col, Row } from "react-bootstrap";
import ExLogo from "../Assets/exIcon.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiNpm,
  DiBootstrap,
  DiVisualstudio,
  DiEX,

} from "react-icons/di";


// import { SiNetlify } from "react-icons/si";
// import{ SiExpress} from "react-icons/si";
 import { SiRedux} from "react-icons/si";



export const TechStack = () => {
  return (
    <div className="techmain">
    <h1 className="Skills-heading">
          <strong> Skills  & Tools</strong>
        </h1>
        
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      
    <Col xs={3} md={1} className="tech-icons">
        <DiJavascript1 /> <h6>JavaScript</h6>
      </Col>
       
      <Col xs={3} md={1} className="tech-icons">
        <DiHtml5 /><h6>Html5</h6>
      </Col>
      
      <Col xs={3} md={1} className="tech-icons">
        <DiCss3 /><h6>CSS3</h6>
      </Col>

      <Col xs={3} md={1} className="tech-icons">
        <DiReact /> <h6>React</h6>
      </Col>

      <Col xs={3} md={1} className="tech-icons">
        <SiRedux /><h6>Redux</h6>
      </Col>

      <Col xs={3} md={1} className="tech-icons">
        <DiMongodb /><h6>MongoDB</h6>
      </Col>
     
      <Col xs={3} md={1} className="tech-icons">
        <DiNodejs /><h6>NodeJS</h6>
      </Col>
     

      <Col xs={3} md={1} className="tech-icons">
        <img src={ExLogo} className="Express-Icon"/>
        <h6>ExpressJS</h6>
      </Col>
      
     

      <Col xs={3} md={1} className="tech-icons">
        <DiGit /><h6>Git</h6>
      </Col>
     
     
      <Col xs={3} md={1} className="tech-icons">
        <DiNpm /><h6>Npm </h6>
      </Col>

      <Col xs={3} md={1} className="tech-icons">
        <DiBootstrap /><h6>Bootstrap</h6>
      </Col>
     
    </Row>
    </div>
  );
};
