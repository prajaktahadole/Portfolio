import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./MiniProjects.css";
import youtubeimg from "../Assets/youtube.png";
import weather from "../Assets/weather.png";
import calculator from  "../Assets/calculator.png";
import tictactoe from  "../Assets/tictactoe.png";

import { DiGithubBadge, DiHtml5,DiReact} from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const MiniProjects = () => {
    return (
        <Container className="body">
        <Container fluid className="miniprojects-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                   <strong > Mini Projects</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                   
                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={youtubeimg} alt="YouTube Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    YouTube Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Clone of YouTube.com using YouTube API where user can watch and search videos.
                                </Card.Text>
                                <div className="Techstacks">
                                    
                                    <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                            
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/prajaktahadole/YouTube_clone"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://prajaktahadole-youtubeclone.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>



                    

                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={weather} alt="Weather App" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                Weather App
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                A simple weather app built with React, It allows users to search for cities worldwide and display current weather, 7 days forecast, and hourly forecast.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiReact className="Techstacks-icons"/>
                                    <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                  
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/prajaktahadole/Weather-app"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://prajaktahadole-weatherapp.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>



                    
                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={tictactoe} alt="Tic-Tac-Toe Game" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                Tic-Tac-Toe 
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                A basic Tic Tac Toe game built using React.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiReact className="Techstacks-icons"/>
                                    <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                  
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/prajaktahadole/Tic-tac-toe"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://prajaktahad-tictactoe.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>



                    
                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={calculator} alt=" Calculator App" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Calculator
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                A simple Calculator app built with React, It allows users to do all arithmetic calculations.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiReact className="Techstacks-icons"/>
                                    <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                  
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/prajaktahadole/Weather-app"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://prajaktahadole-weatherapp.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>






                            
                </Row>
            </Container>
        </Container>
        </Container>
    );
};
