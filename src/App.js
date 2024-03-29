import React from "react";
import { Navbarjsx } from "./Components/Navbar/Navbar";
import "./styles.css";
import "./Components/About/About.css"

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Components/Home/Home";
import { Preloader } from "./Components/Pre";
import { About } from "./Components/About/About";
import { Projects } from "./Components/Projects/Projects";
import {MiniProjects} from "./Components/MiniProjects/MiniProjects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { TechStack } from "./Components/About/Techstack";



export default function App() {
  const [load, setload] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setload(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbarjsx />
        <section id="#home">
          <Home />
        </section>
        <section id="#about">
          <About />
        </section>

        <section id="#Techstack">
          <TechStack />
        </section>

        <section id="#projects">
          <Projects />
        </section>

        <section id="#miniprojects">
          < MiniProjects />
        </section>
      
        <section id="#contact">
          <Contact />
        </section>
       
        <section id="#resume">
          <Footer />
        </section>
      </div>
    </>
  );
}
