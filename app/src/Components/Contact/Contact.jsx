import React from "react";
import "./Contact.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import laptoplogo from "../Assets/laptop.png";
import emailjs from "emailjs-com";

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
        <div className="FormDiv-imagediv">
          <img src="https://image.shutterstock.com/image-illustration/cartoon-business-people-tin-can-260nw-763614199.jpg" alt="Laptop Logo" />
        </div>
        <form className="FormDiv-inputdiv" onSubmit={handleSubmit}>
          <div>
          
            <label htmlFor="name">Name : Prajakta Hadole</label>
        
          </div>
          
          <div>
            <label htmlFor="email">Email : prajaktahadole@gmail.com</label>
            
          </div>
          <div>
            <label htmlFor="subject">Phone : +91 9130805761</label>
           
          </div>
          <div>
            <label htmlFor="message">Address : Akola, Maharastra </label>
         
          </div>
          <div>
            <label>"If you are an employer looking for a dedicated web developer, feel free to contact me"</label>
          </div>
        </form>
      </div>
    </div>
  );
};
