import React from "react";
import "./Contact.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { CgInstagram } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { GrMedium } from "react-icons/gr";




export const Contact = () => {
 
  return (
    <div className="contact-form">
      <h1 className="contact">
        <FaHeadphonesAlt className="contactlogo" /> &nbsp;Get in{" "}
        <strong className="purple">Touch</strong>
      </h1>
      <div className="contactcontainer">
      
          
          <a
            href="https://www.linkedin.com/in/prajakta-hadole/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
         

          <a
            href="https://github.com/prajaktahadole"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
      
          <a
            href="mailto:prajaktahadole.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>

          <a
            href="https://instagram.com/prajaktahadole"
            target="_blank"
            rel="noreferrer"
          >
            <CgInstagram className="twitter" />
          </a>


          <a
            href="https://medium.com/@prajaktahadole"
            aria-label="Medium"
            target="_blank"
            rel="noreferrer"
          >
            <GrMedium />
          </a>
   
      </div>

    </div>
  );
};

