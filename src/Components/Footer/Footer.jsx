import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
export const Footer = () => {
    return (
        <Row md={12} className="home-about-social">
            
            <p>
                Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <div className="footermain">

        <a
          href="https://github.com/prajaktahadole"
          rel="noreferrer"
          target="_blank"
        >
          <h2 className="footer">Made with ❤ By Prajakta Hadole</h2>
        </a>

        <a
             href="https://drive.google.com/drive/folders/13-Xota6GC02wF-PJ2Zo4Y7tXxD6YkKpc?usp=sharing"
             target="_blank"
             rel="noreferrer"
             className="icon-colour home-social-icons"
             id="resumelink"
        >
         <GrResume />
        </a>
      </div>
                
                
               
            </ul>
        </Row>
    );
};
