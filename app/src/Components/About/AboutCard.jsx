import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there !! <br />
            I am <span className="purple"> Prajakta Hadole </span>
           
           , Self-motivated and result-oriented Full stack web developer, 
            with proficiency in MERN stack. Proficient in creating user-centric 
            products using my skills and knowledge.
            <br/>           
           Looking forward to working in a 
            challenging role in a growth-oriented organization while gaining valuable
             work experience in integrating strategies to contribute to the growth and
              success of the organization.        
<br/>
<br/>
            Apart from coding, I focus on physical and mental fitness, I love to 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drive
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>

            <li className="about-activity">
              <ImPointRight /> Cook
            </li>
          </ul>
          <br/>
          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
