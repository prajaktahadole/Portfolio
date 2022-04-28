import React from "react";
import "./Contact.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { CgInstagram, CgFillTelephoneFill } from "react-icons/cg";
//import { ThemeContext } from "../../Context/theme";
import { FaLinkedin } from "react-icons/fa";
import PhoneIcon from "@material-ui/icons/Phone";
import { GrMedium } from "react-icons/gr";



const formdata = {
  to_name: "Prajakta Hadole",
  from_name: "",
  from_email: "",
  message: "",
  subject: ""
};
export const Contact = () => {
  const [inputdata, setinputdata] = React.useState(formdata);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setinputdata({
      ...inputdata,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xmobghn",
        "template_x44rk4n",
        e.target,
        "user_3a3PGrlCPt7hS6KBC3xOa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setinputdata(formdata);
    e.target.reset();
  };



  
  return (
    <div className="contact-form">
      <h1 className="contact">
        <FaHeadphonesAlt className="contactlogo" /> &nbsp;Get in{" "}
        <strong className="purple">Touch</strong>
      </h1>
      <div className="FormDiv">
      
          
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

