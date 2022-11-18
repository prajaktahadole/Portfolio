import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";

export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there !! <br />
            I am <span className="purple"> Prajakta Hadole </span>
             a Self-motivated and result-oriented Full stack web developer,
             with proficiency in MERN stack. Proficient in creating user-centric products 
             using my skills and knowledge. 
             <br />
             I graduated in mechanical engineering in 2021 
             from Amravati university Maharashtra. After graduation, I have done 30 weeks of 9-9-6 full-time Full stack web development training ,
            where I got more than 1200 hours of hands-on coding experience, in HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and Mongo technologies.
            <br />
             On the other hand, I try to exceed my superior’s expectations with high-quality work. Being a fast learner I quickly pick up knowledge, 
             I am good at team management.
            <br/>           
           Looking forward to working in a 
            challenging role in a growth-oriented organization while gaining valuable
             work experience in integrating strategies to contribute to the growth and
              success of the organization.         
          </p>
          
          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
