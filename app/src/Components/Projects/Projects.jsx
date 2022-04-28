import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";

import { DiReact, DiJavascript, DiGithubBadge, DiHtml5,DiMongodb, DiNodejs } from "react-icons/di";
import { SiRedux, SiJavascript, SiMaterialUi } from "react-icons/si";
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
                   

                <Col md={12} className="project-card">
                         <Card className="project-card-view" style={{ textAlign: "center" }}>

                           <div className="mainpro">

                           <div className="proimg">
                            <Card.Img variant="top" src="" alt="Licious Clone" />
                            </div>
                           
                           <div>     
                           <Card.Body>
                                <Card.Title style={{ fontSize: "40px" , marginBottom : "15px" }}>
                                Licious-Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Licious is the ultimate destination to buy premium and high-quality fresh seafood and meat online. It's a team project completed executed in 5 days.
                                </Card.Text>
                                <div className="Techstacks">
                                   <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                   
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/prajaktahadole/myfirstproject_licious"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://prajaktahad-licious-clone.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>



                           </div>
                           </div>
                        </Card>
                    </Col>



                
                    <Col md={12} className="project-card">
                         <Card className="project-card-view" style={{ textAlign: "center" }}>

                           <div className="mainpro">

                           <div className="proimg">
                            <Card.Img variant="top" src="" alt="Nordstrom Clone" />
                            </div>
                           
                           <div>     
                           <Card.Body>
                                <Card.Title style={{ fontSize: "40px" , marginBottom : "15px" }}>
                                Nordstrom-Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Clone of Nordstrom, Inc. which is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. 
                                </Card.Text>
                                <div className="Techstacks">
                                   <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                    <DiNodejs className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/prajaktahadole/Nordstrom-updated"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://prajaktahad-nordstrom-clone.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>



                           </div>
                           </div>
                        </Card>
                    </Col>

            

                                    
                </Row>
            </Container>
        </Container>
        </Container>
    );
};
