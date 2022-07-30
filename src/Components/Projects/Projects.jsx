import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
import liciousimg from "../Assets/licious.png";
import Nordimg from "../Assets/NordImg.png";
import Sport from "../Assets/Sport.png"
import { DiReact,  DiGithubBadge, DiHtml5,DiMongodb, DiNodejs, DiBootstrap } from "react-icons/di";
import { SiRedux, SiJavascript } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
import ExLogo from "../Assets/exIcon.png";
export const Projects = () => {
    return (
        <Container className="body">
        <Container fluid className="project-section">
            <Particle />
            <Container >
                <h1 className="project-heading">
                   <strong >My Projects</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                   

                <Col md={12} className="project-card">
                         <Card className="project-card-view" style={{ textAlign: "center"  }}>

                           <div className="mainpro">

                           <div className="proimg">
                            <Card.Img variant="top"  src={liciousimg} alt="Licious Clone" />
                            </div>
                           
                           <div>     
                           <Card.Body>
                                <Card.Title style={{ fontSize: "40px" , marginBottom : "15px" }}>
                                Licious Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Licious is the ultimate destination to buy premium and high-quality fresh seafood and meat online. It's a team project completed executed in 5 days.
                                </Card.Text>
                                <div className="Techstacks">
                                   <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                    <DiBootstrap className="Techstacks-icons" />
                                   
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
                            <Card.Img variant="top" src={Nordimg} alt="Nordstrom Clone" />
                            </div>
                           
                           <div>     
                           <Card.Body>
                                <Card.Title style={{ fontSize: "40px" , marginBottom : "15px" }}>
                                Nordstrom Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                 Nordstrom, Inc. which is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. 
                                </Card.Text>
                                <div className="Techstacks">
                                   <SiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                    <DiNodejs className="Techstacks-icons" />
                                    <DiBootstrap className="Techstacks-icons" />
                                     <img src={ExLogo} className="ExpreIcon  Techstacks-icons"/>
       
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


                    <Col md={12} className="project-card">
                         <Card className="project-card-view" style={{ textAlign: "center" }}>

                           <div className="mainpro">

                           <div className="proimg">
                            <Card.Img variant="top" src={Sport} alt="SportsJam Clone" />
                            </div>
                           
                           <div>     
                           <Card.Body>
                                <Card.Title style={{ fontSize: "40px" , marginBottom : "15px" }}>
                                SportsJam Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Sportsjam is India's leading Online Sports & Fitness Equipment Store. 
                                </Card.Text>
                                <div className="Techstacks">
                                   <SiJavascript className="Techstacks-icons" />
                                  
                                    <DiReact className="Techstacks-icons"/>
                                    <SiRedux className="Techstacks-icons"/>
                                    <DiMongodb className="Techstacks-icons" />
                                    <DiBootstrap className="Techstacks-icons" />
                                    
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/prajaktahadole/Sportsjam"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://sports-jam.netlify.app/"
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
