import React from "react";
import "./style.css";
import about from "../../Assets/Images/gradient.png";
import portfolio from "../../Assets/Images/gradient 3.png";
import contact from "../../Assets/Images/gradient 2.png";
import resume from "../../Assets/Images/gradient 4.png";
import other from "../../Assets/Images/gradient 5.png";

function Home() {
  return (
    <section id="landing" className="Landing">
      <img src={about} alt="about" />
      <img src={portfolio} alt="portfolio" />
      <img src={contact} alt="contact" />
      <img src={resume} alt="resume" />
      <img src={other} alt="other" />
    </section>
  );
}

export default Home;
