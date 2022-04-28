import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
import sudokologo from "../Assets/S.png";
import Clockifylogo from "../Assets/Internshala.png";
//import Covidlogo from "../Assets/21.png";
//import Travelocitylogo from "../Assets/22.png";
//import Airgaragelogo from "../Assets/23.png";
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5,DiMongodb, DiNodejs } from "react-icons/di";
//import { SiRedux, SiStyledComponents, SiMaterialUi } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
    return (
        <Container className="body">
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                   <strong >My Projects</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                   
                                    
                </Row>
            </Container>
        </Container>
        </Container>
    );
};
